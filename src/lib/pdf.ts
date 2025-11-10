import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface DownloadPdfOptions {
  fileName?: string;
}

export async function downloadElementAsPdf(element: HTMLElement, options?: DownloadPdfOptions) {
  const scale = Math.min(3, window.devicePixelRatio || 2);
  const canvas = await html2canvas(element, {
    backgroundColor: null,
    scale,
    useCORS: true,
  });

  const width = canvas.width;
  const height = canvas.height;
  const orientation = width >= height ? "landscape" : "portrait";
  const dataUrl = canvas.toDataURL("image/png", 1);

  const pdf = new jsPDF({
    orientation,
    unit: "px",
    format: [width, height],
    compress: true,
  });

  pdf.addImage(dataUrl, "PNG", 0, 0, width, height, undefined, "FAST");
  pdf.save(options?.fileName ?? "certificate-preview.pdf");
}
