"use client";

import React from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import type { Song } from "@/data/songs";
import { AlbumBadge } from "./AlbumBadge";
import { usePreviewAudio } from "@/hooks/usePreviewAudio";

interface SongCardProps {
  song: Song;
  rank: number;
  index: number;
  onJumpToRank: () => void;
  onRemove: () => void;
}

export const SongCard = React.memo(function SongCard({
  song,
  rank,
  index,
  onJumpToRank,
  onRemove,
}: SongCardProps) {
  const { ref, isDragging } = useSortable({
    id: song.id,
    index,
    data: { type: "ranked-song" },
  });

  const { isPlaying, togglePlay } = usePreviewAudio(song.previewUrl);

  return (
    <li
      id={`song-${song.id}`}
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

      {/* Album art + play button */}
      {song.artworkUrl ? (
        <button
          onClick={togglePlay}
          className="relative shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-md overflow-hidden group cursor-pointer"
          title={isPlaying ? "Pause preview" : "Play preview"}
        >
          <img
            src={song.artworkUrl}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {song.previewUrl && (
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
              style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <rect x="3" y="2" width="4" height="12" rx="1" />
                  <rect x="9" y="2" width="4" height="12" rx="1" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                  <path d="M4 2.5v11l9-5.5z" />
                </svg>
              )}
            </div>
          )}
        </button>
      ) : (
        <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-md opacity-20"
          style={{ backgroundColor: "var(--theme-text-body)" }}
        />
      )}

      {/* Song title */}
      <div className="flex-1 min-w-0">
        <p
          className="font-medium text-sm sm:text-base truncate"
          style={{ color: "var(--theme-text-body)" }}
        >
          {song.title}
        </p>
      </div>

      {/* Album badge */}
      <AlbumBadge albumId={song.albumId} />

      {/* Jump to rank button */}
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

      {/* Remove button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        className="shrink-0 w-7 h-7 rounded-md text-xs font-bold opacity-30 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center"
        style={{ color: "var(--theme-text-body)" }}
        title="Remove from ranking"
      >
        ×
      </button>
    </li>
  );
});
