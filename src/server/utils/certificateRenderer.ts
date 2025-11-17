import fs from "node:fs/promises";
import path from "node:path";
import PDFDocument from "pdfkit";

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
  fontFamily?: string;
};

const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "KZT",
  maximumFractionDigits: 0,
});

export async function generateCertificatePdf(options: CertificatePdfOptions) {
  const CARD_WIDTH = 350;
  const CARD_HEIGHT = 220;
  const doc = new PDFDocument({ size: [CARD_WIDTH, CARD_HEIGHT], margin: 0 });
  const chunks: Buffer[] = [];

  const resultPromise = new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });

  const textColor = options.textColor ?? "#ffffff";
  const fontFamily = options.fontFamily ?? "Helvetica-Bold";
  const padding = 20;
  const contentWidth = CARD_WIDTH - padding * 2;
  const headerRightWidth = 130;
  const disclaimerHeight = 36;
  const amountBlockHeight = 60;

  if (options.backgroundImageUrl) {
    try {
      const response = await fetch(options.backgroundImageUrl);
      if (response.ok) {
        const buffer = Buffer.from(await response.arrayBuffer());
        doc.image(buffer, 0, 0, { width: CARD_WIDTH, height: CARD_HEIGHT });
      } else {
        doc.rect(0, 0, CARD_WIDTH, CARD_HEIGHT).fill("#1f1f1f");
      }
    } catch {
      doc.rect(0, 0, CARD_WIDTH, CARD_HEIGHT).fill("#1f1f1f");
    }
  } else {
    doc.rect(0, 0, CARD_WIDTH, CARD_HEIGHT).fill("#1f1f1f");
  }

  doc.fillColor(textColor);
  doc.font(fontFamily);

  const branchLine =
    [options.companyLabel, options.companyAddress].filter((item) => item && item.trim().length).join(" — ") ||
    "Buddha Spa";
  doc
    .fontSize(9)
    .text(branchLine, padding, padding, {
      width: contentWidth - headerRightWidth - 10,
      align: "left",
    });

  doc
    .fontSize(10)
    .text(`№ ${options.code}`, padding + contentWidth - headerRightWidth, padding, {
      width: headerRightWidth,
      align: "right",
      characterSpacing: 1.2,
    });

  if (options.validUntil) {
    doc
      .fontSize(9)
      .text(`ДЕЙСТВУЕТ ДО ${options.validUntil.toLocaleDateString("ru-RU")}`, padding + contentWidth - headerRightWidth, padding + 14, {
        width: headerRightWidth,
        align: "right",
        characterSpacing: 1,
      });
  }

  const recipientBlockY = padding + 50;
  doc
    .fontSize(9)
    .text("ДЛЯ", padding, recipientBlockY, {
      width: contentWidth,
      align: "left",
      characterSpacing: 1.5,
    });

  doc
    .fontSize(22)
    .text(options.recipientName, padding, recipientBlockY + 12, {
      width: contentWidth,
      align: "left",
    });

  const amountBlockY = CARD_HEIGHT - padding - disclaimerHeight - amountBlockHeight - 10;
  doc
    .fontSize(9)
    .text("НОМИНАЛ", padding, amountBlockY, {
      width: contentWidth,
      align: "center",
      characterSpacing: 1.8,
    });
  doc
    .fontSize(28)
    .text(currencyFormatter.format(options.amount), padding, amountBlockY + 14, {
      width: contentWidth,
      align: "center",
    });

  const disclaimerY = CARD_HEIGHT - padding - disclaimerHeight;
  doc
    .fontSize(7)
    .text("Предъявите эту подарочную карту при посещении Buddha Spa.", padding, disclaimerY, {
      width: contentWidth,
      align: "left",
    });
  doc
    .fontSize(7)
    .text("Подарочная карта не подлежит возврату и обмену на денежные средства.", padding, disclaimerY + 12, {
      width: contentWidth,
      align: "left",
    });

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
