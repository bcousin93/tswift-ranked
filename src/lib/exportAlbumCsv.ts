import type { Album } from "@/data/songs";

export function exportAlbumRankingCsv(rankedAlbums: Album[]): void {
  const header = "Rank,Album,Year";
  const rows = rankedAlbums.map((album, i) => {
    const name = `"${album.name.replace(/"/g, '""')}"`;
    return `${i + 1},${name},${album.year}`;
  });

  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "taylor-swift-album-ranking.csv";
  link.click();

  URL.revokeObjectURL(url);
}
