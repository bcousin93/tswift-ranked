"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import type { Song } from "@/data/songs";
import { exportRankingCsv } from "@/lib/exportCsv";
import {
  exportCardAsPng,
  shareCard,
  canShareImageFile,
} from "@/lib/exportImage";
import { exportCardAsPdf } from "@/lib/exportPdf";
import { ShareableCard } from "./ShareableCard";

interface ExportToolbarProps {
  rankedSongs: Song[];
}

export function ExportToolbar({ rankedSongs }: ExportToolbarProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState<
    "png" | "pdf" | "share" | null
  >(null);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    setShowShare(canShareImageFile());
  }, []);

  const handleShare = useCallback(async () => {
    if (!cardRef.current) return;
    setExporting("share");
    try {
      await shareCard(cardRef.current);
    } catch {
      // User cancelled or share failed
    } finally {
      setExporting(null);
    }
  }, []);

  const handleCsv = useCallback(() => {
    exportRankingCsv(rankedSongs);
  }, [rankedSongs]);

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

  const hasRankedSongs = rankedSongs.length > 0;
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
          disabled={!hasRankedSongs}
          className={buttonClass}
          style={{
            backgroundColor: "var(--theme-surface)",
            borderColor: "var(--theme-surface-border)",
            color: "var(--theme-text-body)",
          }}
          title="Download full ranking as CSV"
        >
          CSV
        </button>
        <button
          onClick={handlePng}
          disabled={!hasRankedSongs || isExporting}
          className={buttonClass}
          style={{
            backgroundColor: "var(--theme-surface)",
            borderColor: "var(--theme-surface-border)",
            color: "var(--theme-text-body)",
          }}
          title="Download top 13 as shareable image"
        >
          {exporting === "png" ? "..." : "PNG"}
        </button>
        <button
          onClick={handlePdf}
          disabled={!hasRankedSongs || isExporting}
          className={buttonClass}
          style={{
            backgroundColor: "var(--theme-surface)",
            borderColor: "var(--theme-surface-border)",
            color: "var(--theme-text-body)",
          }}
          title="Download top 13 as PDF"
        >
          {exporting === "pdf" ? "..." : "PDF"}
        </button>
        {showShare && (
          <button
            onClick={handleShare}
            disabled={!hasRankedSongs || isExporting}
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
      <ShareableCard ref={cardRef} rankedSongs={rankedSongs} />
    </>
  );
}
