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
  const doc = new PDFDocument({ size: [CARD_WIDTH, CARD_HEIGHT], margin: 20 });
  const chunks: Buffer[] = [];

  const resultPromise = new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });

  const textColor = options.textColor ?? "#ffffff";
  const fontFamily = options.fontFamily ?? "Helvetica-Bold";

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
  doc.font(fontFamily).fontSize(12).text("Buddha Spa", { align: "left" });
  doc.moveDown(0.5);
  doc.font(fontFamily).fontSize(14).text(options.certificateName, { align: "left" });
  doc.moveDown(0.8);

  doc.fontSize(10).text(`Код: ${options.code}`);
  doc.text(`Номинал: ${currencyFormatter.format(options.amount)}`);
  doc.text(`Получатель: ${options.recipientName}`);
  doc.text(`От: ${options.senderName}`);
  doc.text(`Выпущен: ${options.issuedAt.toLocaleDateString("ru-RU")}`);

  if (options.validUntil) {
    doc.text(`Действителен до: ${options.validUntil.toLocaleDateString("ru-RU")}`);
  }

  if (options.message) {
    doc.moveDown(0.5);
    doc.fontSize(9).text(`Сообщение: ${options.message}`, { align: "left" });
  }

  doc.moveDown(0.6);
  doc.fontSize(9).text(`Филиал: ${options.companyLabel}`, { align: "left" });
  if (options.companyAddress) {
    doc.text(`Адрес: ${options.companyAddress}`);
  }

  doc.moveDown(0.8);
  doc
    .fontSize(7)
    .fillColor(textColor)
    .text(
      "Предъявите этот сертификат при посещении Buddha Spa. Сертификат не подлежит возврату и обмену на денежные средства.",
      { align: "left" },
    );

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
