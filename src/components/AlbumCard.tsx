"use client";

import React from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import type { Album } from "@/data/songs";
import { getAlbumArtwork } from "@/data/songs";

interface AlbumCardProps {
  album: Album;
  rank: number;
  index: number;
  onJumpToRank: () => void;
}

export const AlbumCard = React.memo(function AlbumCard({
  album,
  rank,
  index,
  onJumpToRank,
}: AlbumCardProps) {
  const { ref, isDragging } = useSortable({
    id: album.id,
    index,
    data: { type: "ranked-album" },
  });

  const artworkUrl = getAlbumArtwork(album.id);

  return (
    <li
      ref={ref}
      className={`
        flex items-center gap-2 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border
        transition-all duration-200 select-none
        ${isDragging ? "shadow-2xl opacity-80 z-50 scale-[1.02]" : "shadow-sm hover:shadow-md"}
      `}
      style={{
        backgroundColor: "var(--theme-surface)",
        borderColor: "var(--theme-surface-border)",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {/* Rank number */}
      <span
        className="w-8 sm:w-10 text-right font-mono text-xs sm:text-sm shrink-0 opacity-50"
        style={{ color: "var(--theme-text-body)" }}
      >
        {rank}
      </span>

      {/* Album art */}
      {artworkUrl ? (
        <img
          src={artworkUrl}
          alt={album.name}
          className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-md object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-md opacity-20"
          style={{ backgroundColor: "var(--theme-text-body)" }}
        />
      )}

      {/* Album name + year */}
      <div className="flex-1 min-w-0">
        <p
          className="font-medium text-sm sm:text-base truncate"
          style={{ color: "var(--theme-text-body)" }}
        >
          {album.name}
        </p>
        <p
          className="text-xs opacity-50"
          style={{ color: "var(--theme-text-body)" }}
        >
          {album.year}
        </p>
      </div>

      {/* Jump to rank */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onJumpToRank();
        }}
        className="shrink-0 w-7 h-7 rounded-md text-xs font-bold opacity-40 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
        style={{ color: "var(--theme-text-body)" }}
        title="Jump to rank"
      >
        #
      </button>
    </li>
  );
});
