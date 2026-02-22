"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import type { Album } from "@/data/songs";
import { exportAlbumRankingCsv } from "@/lib/exportAlbumCsv";
import {
  exportCardAsPng,
  captureCardAsBlob,
  shareBlob,
  canShareImageFile,
} from "@/lib/exportImage";
import { exportCardAsPdf } from "@/lib/exportPdf";
import { AlbumShareableCard } from "./AlbumShareableCard";

interface AlbumExportToolbarProps {
  rankedAlbums: Album[];
}

export function AlbumExportToolbar({ rankedAlbums }: AlbumExportToolbarProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState<
    "png" | "pdf" | "share" | null
  >(null);
  const [showShare, setShowShare] = useState(false);
  const shareBlobRef = useRef<Blob | null>(null);

  useEffect(() => {
    setShowShare(canShareImageFile());
  }, []);

  // Pre-capture the card image so navigator.share() can fire immediately on click
  useEffect(() => {
    if (!showShare || !cardRef.current || rankedAlbums.length === 0) {
      shareBlobRef.current = null;
      return;
    }
    let cancelled = false;
    captureCardAsBlob(cardRef.current).then((blob) => {
      if (!cancelled) shareBlobRef.current = blob;
    }).catch(() => {
      // capture failed; handleShare will re-capture as fallback
    });
    return () => { cancelled = true; };
  }, [showShare, rankedAlbums]);

  const shareMeta = {
    filename: "taylor-swift-album-ranking.png",
    title: "My Taylor Swift Album Ranking",
    text: "Check out my Taylor Swift album ranking! Make yours at erasranked.com",
  };

  const handleShare = useCallback(async () => {
    setExporting("share");
    try {
      if (shareBlobRef.current) {
        await shareBlob(shareBlobRef.current, shareMeta);
      } else if (cardRef.current) {
        // Fallback: capture now (may lose user activation on some browsers)
        const blob = await captureCardAsBlob(cardRef.current);
        await shareBlob(blob, shareMeta);
      }
    } catch {
      // User cancelled share sheet
    } finally {
      setExporting(null);
    }
  }, []);

  const handleCsv = useCallback(() => {
    exportAlbumRankingCsv(rankedAlbums);
  }, [rankedAlbums]);

  const handlePng = useCallback(async () => {
    if (!cardRef.current) return;
    setExporting("png");
    try {
      await exportCardAsPng(cardRef.current);
    } finally {
      setExporting(null);
    }
  }, []);

  const handlePdf = useCallback(async () => {
    if (!cardRef.current) return;
    setExporting("pdf");
    try {
      await exportCardAsPdf(cardRef.current);
    } finally {
      setExporting(null);
    }
  }, []);

  const hasAlbums = rankedAlbums.length > 0;
  const isExporting = exporting !== null;

  const buttonClass =
    "px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 cursor-pointer border disabled:opacity-30 disabled:cursor-not-allowed";

  return (
    <>
      <div
        className="flex items-center gap-2 mb-4"
        role="toolbar"
        aria-label="Export options"
      >
        <span
          className="text-xs font-medium opacity-50 mr-1"
          style={{ color: "var(--theme-text-on-primary)" }}
        >
          Export
        </span>
        <button
          onClick={handleCsv}
          disabled={!hasAlbums}
          className={buttonClass}
          style={{
            backgroundColor: "var(--theme-surface)",
            borderColor: "var(--theme-surface-border)",
            color: "var(--theme-text-body)",
          }}
          title="Download album ranking as CSV"
        >
          CSV
        </button>
        <button
          onClick={handlePng}
          disabled={!hasAlbums || isExporting}
          className={buttonClass}
          style={{
            backgroundColor: "var(--theme-surface)",
            borderColor: "var(--theme-surface-border)",
            color: "var(--theme-text-body)",
          }}
          title="Download album ranking as shareable image"
        >
          {exporting === "png" ? "..." : "PNG"}
        </button>
        <button
          onClick={handlePdf}
          disabled={!hasAlbums || isExporting}
          className={buttonClass}
          style={{
            backgroundColor: "var(--theme-surface)",
            borderColor: "var(--theme-surface-border)",
            color: "var(--theme-text-body)",
          }}
          title="Download album ranking as PDF"
        >
          {exporting === "pdf" ? "..." : "PDF"}
        </button>
        {showShare && (
          <button
            onClick={handleShare}
            disabled={!hasAlbums || isExporting}
            className={buttonClass}
            style={{
              backgroundColor: "var(--theme-primary)",
              borderColor: "var(--theme-primary)",
              color: "var(--theme-text-on-primary)",
            }}
            title="Share your ranking"
          >
            {exporting === "share" ? "..." : "Share"}
          </button>
        )}
      </div>

      {/* Hidden card for html2canvas capture */}
      <AlbumShareableCard ref={cardRef} rankedAlbums={rankedAlbums} />
    </>
  );
}
