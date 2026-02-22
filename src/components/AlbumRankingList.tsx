"use client";

import { useState, useCallback } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { useRankedAlbums } from "@/hooks/useRankedAlbums";
import { useAlbumTheme } from "@/hooks/useAlbumTheme";
import { AlbumCard } from "./AlbumCard";
import { JumpToRankDialog } from "./JumpToRankDialog";
import { AlbumExportToolbar } from "./AlbumExportToolbar";
import type { Album } from "@/data/songs";

export function AlbumRankingList() {
  const { rankedAlbums, setRankedAlbums, jumpToRank, hasCustomOrder } = useRankedAlbums();
  useAlbumTheme(hasCustomOrder ? rankedAlbums[0]?.id : undefined);

  const [jumpDialog, setJumpDialog] = useState<{
    album: Album;
    index: number;
  } | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = useCallback((event: any) => {
    setRankedAlbums((prev) => move(prev, event));
  }, [setRankedAlbums]);

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
      <div className="max-w-2xl mx-auto">
        <AlbumExportToolbar rankedAlbums={rankedAlbums} />
        <ol className="flex flex-col gap-1.5 sm:gap-2">
          {rankedAlbums.map((album, index) => (
            <AlbumCard
              key={album.id}
              album={album}
              rank={index + 1}
              index={index}
              onJumpToRank={() => setJumpDialog({ album, index })}
            />
          ))}
        </ol>
      </div>

      {jumpDialog && (
        <JumpToRankDialog
          itemName={jumpDialog.album.name}
          currentRank={jumpDialog.index + 1}
          totalItems={rankedAlbums.length}
          onConfirm={handleJumpConfirm}
          onClose={() => setJumpDialog(null)}
        />
      )}
    </DragDropProvider>
  );
}
