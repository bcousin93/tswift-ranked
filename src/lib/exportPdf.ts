import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function exportCardAsPdf(cardElement: HTMLElement): Promise<void> {
  const canvas = await html2canvas(cardElement, {
    useCORS: true,
    scale: 1,
    backgroundColor: null,
    logging: false,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdfWidth = 210; // mm
  const pdfHeight = pdfWidth * (1350 / 1080); // maintain 4:5 aspect ratio

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: [pdfWidth, pdfHeight],
  });

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("taylor-swift-top-10.pdf");
}
