import fs from "node:fs/promises";
import path from "node:path";
import PDFDocument from "pdfkit";
import { CERTIFICATE_FONT_FILE, CERTIFICATE_FONT_NAME } from "@/shared/certificate";

type CertificatePdfOptions = {
  code: string;
  certificateName: string;
  amount: number;
  recipientName: string;
  senderName: string;
  companyLabel: string;
  companyAddress: string;
  message: string;
  validUntil?: Date;
  issuedAt: Date;
  backgroundImageUrl?: string;
  textColor?: string;
};

const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "KZT",
  maximumFractionDigits: 0,
});

async function loadBackgroundImage(source?: string) {
  if (!source) {
    return null;
  }

  const trimmed = source.trim();
  if (!trimmed) {
    return null;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const response = await fetch(trimmed);
      if (response.ok) {
        return Buffer.from(await response.arrayBuffer());
      }
    } catch (error) {
      console.warn("[certificateRenderer] Не удалось загрузить фон по URL", trimmed, error);
    }
    return null;
  }

  const normalized = trimmed.replace(/^\/+/, "");
  const candidates = [
    path.join(process.cwd(), normalized),
    path.join(process.cwd(), "public", normalized),
  ];

  for (const candidate of candidates) {
    try {
      const buffer = await fs.readFile(candidate);
      return buffer;
    } catch {
      // try next candidate
    }
  }

  return null;
}

export async function generateCertificatePdf(options: CertificatePdfOptions) {
  // Match dimensions from CertificatePreview (max-w-[640px] min-h-[360px] -> approx 640x400)
  const CARD_WIDTH = 640;
  const CARD_HEIGHT = 400;
  const doc = new PDFDocument({ size: [CARD_WIDTH, CARD_HEIGHT], margin: 0 });
  const chunks: Buffer[] = [];

  const resultPromise = new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });

  const textColor = options.textColor ?? "#ffffff";
  const fontPath = path.resolve(process.cwd(), "public/fonts/PlayfairDisplay-Regular.ttf");
  const systemFont = "/System/Library/Fonts/Supplemental/Arial.ttf";
  let fontToUse = "Helvetica-Bold";

  // Try to register fonts
  try {
    // Try Playfair first
    doc.registerFont("Playfair", fontPath);
    doc.font("Playfair"); // Test if it works
    fontToUse = "Playfair";
  } catch (error) {
    console.warn("[certificateRenderer] Playfair font failed, trying Arial...", error);
    try {
      doc.registerFont("Arial", systemFont);
      fontToUse = "Arial";
    } catch (fallbackError) {
      console.error("[certificateRenderer] Arial font failed:", fallbackError);
      // Keep Helvetica-Bold
    }
  }

  doc.font(fontToUse);

  const padding = 24;
  const backgroundBuffer = await loadBackgroundImage(options.backgroundImageUrl);

  // 1. Background with 'cover' logic
  if (backgroundBuffer) {
    try {
      // Use pdfkit's cover option (supported in 0.13+)
      // Cast options to any to avoid TS error with outdated @types/pdfkit
      doc.image(backgroundBuffer, 0, 0, {
        cover: [CARD_WIDTH, CARD_HEIGHT],
        align: "center",
        valign: "center",
      } as any);
    } catch (imgError) {
      console.error("[certificateRenderer] Failed to render background image:", imgError);
      doc.rect(0, 0, CARD_WIDTH, CARD_HEIGHT).fill("#1f1f1f");
    }
  } else {
    doc.rect(0, 0, CARD_WIDTH, CARD_HEIGHT).fill("#1f1f1f");
  }

  // 2. Gradient Overlay
  const grad1 = doc.linearGradient(0, 0, CARD_WIDTH / 2, CARD_HEIGHT / 2);
  grad1.stop(0, "black", 0.5);
  grad1.stop(1, "black", 0);
  doc.rect(0, 0, CARD_WIDTH, CARD_HEIGHT).fill(grad1);

  const grad2 = doc.linearGradient(CARD_WIDTH / 2, CARD_HEIGHT / 2, CARD_WIDTH, CARD_HEIGHT);
  grad2.stop(0, "black", 0);
  grad2.stop(1, "black", 0.1);
  doc.rect(0, 0, CARD_WIDTH, CARD_HEIGHT).fill(grad2);

  // 3. Header Content
  doc.fillColor(textColor);

  // Address (Left) - Match Preview: only address, multiline
  // Preview logic: const branchAddress = selectedBranch?.address ?? "—";
  // formattedBranchAddress = branchAddress.replace(",", ",\n")

  const addressText = options.companyAddress || "—";
  // PDFKit handles wrapping automatically if width is set, but we can force newlines if needed
  // The preview replaces commas with newlines for better vertical layout
  const formattedAddress = addressText.includes(",") ? addressText.replace(/,/g, ",\n") : addressText;

  doc
    .fontSize(16)
    .text(formattedAddress, padding, padding, {
      width: CARD_WIDTH * 0.65, // max-w-[65%]
      align: "left",
      lineGap: 2, // Add slight gap for multiline readability
    });

  // Number & Date (Right)
  const headerRightX = CARD_WIDTH - padding - 200; // approximate width for right block
  const headerRightWidth = 200;

  doc
    .fontSize(16)
    .text(`№ ${options.code}`, headerRightX, padding, {
      width: headerRightWidth,
      align: "right",
    });

  if (options.validUntil) {
    doc
      .fontSize(16)
      .text(`До ${options.validUntil.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "2-digit" })}`, headerRightX, padding + 20, {
        width: headerRightWidth,
        align: "right",
      });
  }

  // Header Border Line (border-b border-white/10)
  // We'll draw it slightly below the header text. Assuming header height is approx 50-60px.
  const headerBottomY = padding + 50;
  doc.save();
  doc.strokeColor("white");
  doc.strokeOpacity(0.1);
  doc.lineWidth(1);
  doc.moveTo(padding, headerBottomY).lineTo(CARD_WIDTH - padding, headerBottomY).stroke();
  doc.restore();

  // 4. Main Content (Bottom aligned)
  // We need to calculate Y positions relative to bottom
  const bottomContentHeight = 80; // approx height for recipient + amount
  const contentY = CARD_HEIGHT - padding - bottomContentHeight;

  // Recipient (Bottom Left)
  doc
    .fontSize(30) // text-2xl/3xl
    .text(options.recipientName || "Получатель", padding, contentY + 20, {
      width: CARD_WIDTH * 0.5,
      align: "left",
    });

  // Amount (Bottom Right)
  doc
    .fontSize(40) // text-3xl/4xl
    .text(currencyFormatter.format(options.amount), CARD_WIDTH / 2, contentY + 10, {
      width: CARD_WIDTH / 2 - padding,
      align: "right",
    });

  // Note: Footer text ("Предъявите сертификат...") is NOT present in the Preview component provided,
  // so we omit it here to match the design exactly as requested.

  doc.end();

  const buffer = await resultPromise;

  const directory = path.join(process.cwd(), "tmp", "certificates");
  await fs.mkdir(directory, { recursive: true });
  const fileName = `certificate-${options.code}.pdf`;
  const absolutePath = path.join(directory, fileName);
  await fs.writeFile(absolutePath, buffer);
  const relativePath = path.relative(process.cwd(), absolutePath);

  return { buffer, fileName, absolutePath, relativePath };
}
