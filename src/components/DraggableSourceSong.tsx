"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/react";
import type { Song } from "@/data/songs";
import { usePreviewAudio } from "@/hooks/usePreviewAudio";

interface DraggableSourceSongProps {
  song: Song;
  onAdd?: (songId: string) => void;
}

export const DraggableSourceSong = React.memo(function DraggableSourceSong({
  song,
  onAdd,
}: DraggableSourceSongProps) {
  const { ref, isDragging } = useDraggable({
    id: song.id,
    data: { type: "source-song", song },
  });

  const { isPlaying, togglePlay } = usePreviewAudio(song.previewUrl);

  return (
    <div
      ref={ref}
      className={`
        flex items-start gap-1.5 px-2 py-1.5 rounded text-sm cursor-grab active:cursor-grabbing
        transition-opacity duration-150 group/source
        ${isDragging ? "opacity-40" : "opacity-80 hover:opacity-100"}
      `}
      style={{ color: "var(--theme-text-on-primary)" }}
    >
      <span className="text-xs opacity-40 font-mono w-5 text-right shrink-0">
        {song.trackNumber}
      </span>
      {song.previewUrl && (
        <button
          onClick={togglePlay}
          className={`shrink-0 w-5 h-5 flex items-center justify-center rounded-full cursor-pointer transition-opacity ${
            isPlaying ? "opacity-100" : "opacity-0 group-hover/source:opacity-60 hover:!opacity-100"
          }`}
          title={isPlaying ? "Pause" : "Preview"}
        >
          {isPlaying ? (
            <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="2" width="4" height="12" rx="1" />
              <rect x="9" y="2" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2.5v11l9-5.5z" />
            </svg>
          )}
        </button>
      )}
      <span className="flex-1">{song.title}</span>
      {onAdd && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdd(song.id);
          }}
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover/source:opacity-60 hover:!opacity-100 transition-opacity cursor-pointer md:opacity-0 max-md:opacity-60"
          style={{ color: "var(--theme-text-on-primary)" }}
          title="Add to ranking"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </button>
      )}
    </div>
  );
});
