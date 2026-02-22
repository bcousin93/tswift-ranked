import { ALBUMS, type AlbumId } from "@/data/songs";

export function AlbumBadge({ albumId }: { albumId: AlbumId }) {
  const album = ALBUMS[albumId];
  return (
    <span
      className="hidden sm:inline text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap"
      style={{
        backgroundColor: album.theme.primary,
        color: album.theme.textOnPrimary,
      }}
    >
      {album.name}
    </span>
  );
}
