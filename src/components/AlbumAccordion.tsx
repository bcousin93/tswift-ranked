"use client";

import { useState, useMemo } from "react";
import { ALBUMS, type AlbumId, type Song } from "@/data/songs";
import { DraggableSourceSong } from "./DraggableSourceSong";
import { ALBUM_ORDER } from "@/hooks/useRankedList";

interface AlbumAccordionProps {
  unrankedByAlbum: Record<AlbumId, Song[]>;
  filter?: string;
  onAddSong?: (songId: string) => void;
}

export function AlbumAccordion({ unrankedByAlbum, filter = "", onAddSong }: AlbumAccordionProps) {
  const [expanded, setExpanded] = useState<Set<AlbumId>>(new Set());

  const toggle = (albumId: AlbumId) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(albumId)) {
        next.delete(albumId);
      } else {
        next.add(albumId);
      }
      return next;
    });
  };

  const query = filter.toLowerCase().trim();

  const filteredByAlbum = useMemo(() => {
    if (!query) return unrankedByAlbum;
    const result = {} as Record<AlbumId, Song[]>;
    for (const albumId of ALBUM_ORDER) {
      result[albumId] = unrankedByAlbum[albumId].filter((s) =>
        s.title.toLowerCase().includes(query)
      );
    }
    return result;
  }, [unrankedByAlbum, query]);

  return (
    <div className="flex flex-col gap-1">
      {ALBUM_ORDER.map((albumId) => {
        const album = ALBUMS[albumId];
        const songs = filteredByAlbum[albumId];
        const isFiltering = query.length > 0;
        const isExpanded = isFiltering ? songs.length > 0 : expanded.has(albumId);
        const totalRemaining = unrankedByAlbum[albumId].length;

        if (isFiltering && songs.length === 0) return null;

        return (
          <div key={albumId}>
            <button
              onClick={() => toggle(albumId)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                cursor-pointer transition-all duration-150 hover:brightness-110 active:scale-[0.99]
                backdrop-blur-sm ${totalRemaining === 0 ? "opacity-50" : ""}`}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                color: "#f0f0f0",
              }}
            >
              {/* Album color dot */}
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: album.theme.primary }}
              />
              <span
                className="transition-transform duration-200 text-xs opacity-50"
                style={{
                  transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                ▶
              </span>
              <span className="truncate flex-1 text-left">{album.name}</span>
              <span className="text-xs opacity-40 tabular-nums">
                {totalRemaining}
              </span>
            </button>

            {isExpanded && songs.length > 0 && (
              <div className="ml-2 mt-1 mb-1 flex flex-col gap-0.5">
                {songs.map((song) => (
                  <DraggableSourceSong key={song.id} song={song} onAdd={onAddSong} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
