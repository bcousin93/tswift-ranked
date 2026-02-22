import html2canvas from "html2canvas";

export async function exportCardAsPng(cardElement: HTMLElement): Promise<void> {
  const canvas = await html2canvas(cardElement, {
    useCORS: true,
    scale: 1,
    backgroundColor: null,
    logging: false,
  });

  const link = document.createElement("a");
  link.download = "taylor-swift-top-10.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
