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
};

const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "KZT",
  maximumFractionDigits: 0,
});

export async function generateCertificatePdf(options: CertificatePdfOptions) {
  const doc = new PDFDocument({ size: "A4", margin: 50 });
  const chunks: Buffer[] = [];

  const resultPromise = new Promise<Buffer>((resolve, reject) => {
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);
  });

  doc.fillColor("#2d2a26");
  doc.fontSize(28).text("Buddha Spa", { align: "center" });
  doc.moveDown();

  doc.fontSize(22).text(options.certificateName, { align: "center" });
  doc.moveDown(1.5);

  doc.fontSize(16).text(`Код сертификата: ${options.code}`, { align: "center" });
  doc.moveDown();

  doc.fontSize(14).text(`Получатель: ${options.recipientName}`, { align: "left" });
  doc.moveDown(0.5);
  doc.text(`От: ${options.senderName}`);
  doc.moveDown(0.5);
  doc.text(`Номинал: ${currencyFormatter.format(options.amount)}`);
  doc.moveDown(0.5);
  doc.text(`Дата выпуска: ${options.issuedAt.toLocaleDateString("ru-RU")}`);

  if (options.validUntil) {
    doc.moveDown(0.5);
    doc.text(`Действителен до: ${options.validUntil.toLocaleDateString("ru-RU")}`);
  }

  if (options.message) {
    doc.moveDown();
    doc.fontSize(12).text(`Поздравление: ${options.message}`, { align: "left" });
  }

  doc.moveDown();
  doc.fontSize(12).text(`Филиал: ${options.companyLabel}`, { align: "left" });
  if (options.companyAddress) {
    doc.moveDown(0.3);
    doc.text(`Адрес: ${options.companyAddress}`);
  }

  doc.moveDown(2);
  doc.fontSize(10).fillColor("#6b6b6b").text("Предъявите этот сертификат при посещении Buddha Spa. Сертификат не подлежит возврату и обмену на денежные средства.", {
    align: "center",
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
