"use client";

import { useState, useCallback } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { useDroppable } from "@dnd-kit/react";
import { useRankedList } from "@/hooks/useRankedList";
import { useAlbumTheme } from "@/hooks/useAlbumTheme";
import { SongCard } from "./SongCard";
import { JumpToRankDialog } from "./JumpToRankDialog";
import { AlbumAccordion } from "./AlbumAccordion";
import { ExportToolbar } from "./ExportToolbar";
import type { Song } from "@/data/songs";

function RankingDropZone({
  children,
  isEmpty,
}: {
  children: React.ReactNode;
  isEmpty: boolean;
}) {
  const { ref, isDropTarget } = useDroppable({
    id: "ranking-zone",
    data: { type: "ranking-zone" },
  });

  return (
    <div
      ref={ref}
      className={`
        min-h-[400px] rounded-xl transition-all duration-200
        ${isDropTarget ? "ring-2 ring-offset-2" : ""}
      `}
      style={{
        // @ts-expect-error CSS custom property
        "--tw-ring-color": "var(--theme-primary)",
        "--tw-ring-offset-color": "transparent",
      }}
    >
      {isEmpty ? (
        <div
          className={`
            flex flex-col items-center justify-center min-h-[400px] rounded-xl border-2 border-dashed
            transition-all duration-200
            ${isDropTarget ? "scale-[1.01]" : ""}
          `}
          style={{
            borderColor: "var(--theme-surface-border)",
            color: "var(--theme-text-on-primary)",
          }}
        >
          <p className="text-lg font-medium opacity-60">
            Drag songs here to start ranking
          </p>
          <p className="text-sm opacity-40 mt-1">
            Expand an album on the left and drag songs over
          </p>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export function RankingList() {
  const {
    rankedSongs,
    setRankedSongs,
    unrankedByAlbum,
    addSong,
    removeSong,
    jumpToRank,
  } = useRankedList();
  const [songFilter, setSongFilter] = useState("");
  useAlbumTheme(rankedSongs[0]?.albumId);

  const [jumpDialog, setJumpDialog] = useState<{
    song: Song;
    index: number;
  } | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = useCallback((event: any) => {
    const { source, target } = event.operation;
    if (!source || !target) return;

    const sourceData = source.data;

    if (sourceData?.type === "source-song") {
      // Dragged from accordion into ranking zone
      const songId = source.id as string;

      // Figure out where to insert
      const targetData = target.data;
      if (targetData?.type === "ranking-zone") {
        // Dropped on the empty zone itself — append to end
        addSong(songId);
      } else {
        // Dropped on/near a specific ranked song — insert at that position
        const targetIndex = rankedSongs.findIndex((s) => s.id === target.id);
        if (targetIndex !== -1) {
          addSong(songId, targetIndex);
        } else {
          addSong(songId);
        }
      }
    } else {
      // Reorder within the ranking list
      setRankedSongs((prev) => move(prev, event));
    }
  }, [addSong, rankedSongs, setRankedSongs]);

  const handleJumpConfirm = useCallback(
    (newRank: number) => {
      if (jumpDialog) {
        jumpToRank(jumpDialog.index, newRank - 1);
        setJumpDialog(null);
      }
    },
    [jumpDialog, jumpToRank]
  );

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="flex gap-6">
        {/* Sidebar: Album Accordions */}
        <aside className="w-64 lg:w-80 shrink-0 hidden md:block">
          <div className="sticky top-8 rounded-xl p-3 backdrop-blur-md"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <input
              type="text"
              value={songFilter}
              onChange={(e) => setSongFilter(e.target.value)}
              placeholder="Search songs..."
              className="w-full px-3 py-1.5 mb-3 rounded-lg text-sm bg-black/30 border border-white/10 text-white/90 placeholder:text-white/40 outline-none focus:border-white/30 transition-colors"
            />
            <div className="max-h-[calc(100dvh-10rem)] overflow-y-auto pr-1">
              <AlbumAccordion unrankedByAlbum={unrankedByAlbum} filter={songFilter} />
            </div>
          </div>
        </aside>

        {/* Main: Ranking */}
        <div className="flex-1 min-w-0">
          <ExportToolbar rankedSongs={rankedSongs} />
          <RankingDropZone isEmpty={rankedSongs.length === 0}>
            <ol className="flex flex-col gap-1.5 sm:gap-2">
              {rankedSongs.map((song, index) => (
                <SongCard
                  key={song.id}
                  song={song}
                  rank={index + 1}
                  index={index}
                  onJumpToRank={() => setJumpDialog({ song, index })}
                  onRemove={() => removeSong(song.id)}
                />
              ))}
            </ol>
          </RankingDropZone>
        </div>
      </div>

      {/* Mobile: Album drawer (below ranking on small screens) */}
      <div className="md:hidden mt-6">
        <h2
          className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-70"
          style={{ color: "var(--theme-text-on-primary)" }}
        >
          Albums — drag songs into your ranking above
        </h2>
        <input
          type="text"
          value={songFilter}
          onChange={(e) => setSongFilter(e.target.value)}
          placeholder="Search songs..."
          className="w-full px-3 py-1.5 mb-3 rounded-lg text-sm bg-black/30 border border-white/10 text-white/90 placeholder:text-white/40 outline-none focus:border-white/30 transition-colors"
        />
        <AlbumAccordion unrankedByAlbum={unrankedByAlbum} filter={songFilter} />
      </div>

      {jumpDialog && (
        <JumpToRankDialog
          itemName={jumpDialog.song.title}
          currentRank={jumpDialog.index + 1}
          totalItems={rankedSongs.length}
          onConfirm={handleJumpConfirm}
          onClose={() => setJumpDialog(null)}
        />
      )}
    </DragDropProvider>
  );
}
