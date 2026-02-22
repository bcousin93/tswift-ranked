import html2canvas from "html2canvas";

export async function captureCardAsBlob(
  cardElement: HTMLElement
): Promise<Blob> {
  const canvas = await html2canvas(cardElement, {
    useCORS: true,
    scale: 1,
    backgroundColor: null,
    logging: false,
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Failed to create image blob"));
    }, "image/png");
  });
}

export async function exportCardAsPng(
  cardElement: HTMLElement
): Promise<void> {
  const blob = await captureCardAsBlob(cardElement);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "taylor-swift-top-10.png";
  link.href = url;
  link.click();
  URL.revokeObjectURL(url);
}

export async function shareCardAsImage(
  cardElement: HTMLElement
): Promise<void> {
  const blob = await captureCardAsBlob(cardElement);
  const file = new File([blob], "taylor-swift-ranking.png", {
    type: "image/png",
  });

  await navigator.share({
    files: [file],
    title: "My Taylor Swift Ranking",
    text: "Check out my Taylor Swift ranking! Make yours at erasranked.com",
  });
}

export function canNativeShare(): boolean {
  return typeof navigator !== "undefined" && !!navigator.share && !!navigator.canShare;
}
