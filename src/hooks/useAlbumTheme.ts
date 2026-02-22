"use client";

import { useEffect, useRef } from "react";
import { ALBUMS, type AlbumId } from "@/data/songs";

const CYCLE_ALBUMS: AlbumId[] = [
  "taylor-swift", "fearless", "speak-now", "red", "1989",
  "reputation", "lover", "folklore", "evermore", "midnights",
  "tortured-poets", "showgirl",
];

const CYCLE_INTERVAL = 3000;

function applyTheme(albumId: AlbumId) {
  const theme = ALBUMS[albumId].theme;
  const root = document.documentElement;

  root.style.setProperty("--theme-primary", theme.primary);
  root.style.setProperty("--theme-secondary", theme.secondary);
  root.style.setProperty("--theme-text-on-primary", theme.textOnPrimary);
  root.style.setProperty("--theme-text-body", theme.textBody);
  root.style.setProperty("--theme-surface", theme.surface);
  root.style.setProperty("--theme-surface-border", theme.surfaceBorder);

  const body = document.body;
  const eraFont = getComputedStyle(body).getPropertyValue(theme.fontVar).trim();
  if (eraFont) {
    root.style.setProperty("--theme-font-family", eraFont);
  }
}

export function useAlbumTheme(albumId: AlbumId | undefined) {
  const indexRef = useRef(0);

  // When a song is ranked, apply that album's theme
  useEffect(() => {
    if (!albumId) return;
    applyTheme(albumId);
  }, [albumId]);

  // When ranking is empty, cycle through era themes
  useEffect(() => {
    if (albumId) return;

    applyTheme(CYCLE_ALBUMS[indexRef.current]);

    const timer = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % CYCLE_ALBUMS.length;
      applyTheme(CYCLE_ALBUMS[indexRef.current]);
    }, CYCLE_INTERVAL);

    return () => clearInterval(timer);
  }, [albumId]);
}
