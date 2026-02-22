import { ALBUMS, type Song } from "@/data/songs";

export function exportRankingCsv(rankedSongs: Song[]): void {
  const header = "Rank,Title,Album,Track Number";
  const rows = rankedSongs.map((song, i) => {
    const album = ALBUMS[song.albumId];
    const title = `"${song.title.replace(/"/g, '""')}"`;
    const albumName = `"${album.name.replace(/"/g, '""')}"`;
    return `${i + 1},${title},${albumName},${song.trackNumber}`;
  });

  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "taylor-swift-ranking.csv";
  link.click();

  URL.revokeObjectURL(url);
}
