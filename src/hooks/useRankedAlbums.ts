"use client";

import { useState, useEffect, useCallback } from "react";
import { ALBUMS, type Album, type AlbumId } from "@/data/songs";
import { ALBUM_ORDER } from "./useRankedList";

const STORAGE_KEY = "tswift-ranked-albums";

function loadOrder(): AlbumId[] | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const ids: AlbumId[] = JSON.parse(stored);
    return ids.filter((id) => id in ALBUMS);
  } catch {
    return null;
  }
}

function saveOrder(albumIds: AlbumId[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(albumIds));
}

export function useRankedAlbums() {
  const [rankedAlbums, setRankedAlbums] = useState<Album[]>(() => {
    const savedOrder = loadOrder();
    const albumSet = new Set<AlbumId>(ALBUM_ORDER);
    const filtered = savedOrder?.filter((id) => albumSet.has(id));
    const order =
      filtered && filtered.length === ALBUM_ORDER.length
        ? filtered
        : ALBUM_ORDER;
    return order.map((id) => ALBUMS[id]);
  });

  // True if the user has a saved custom order
  const hasCustomOrder = Boolean(loadOrder());

  useEffect(() => {
    saveOrder(rankedAlbums.map((a) => a.id));
  }, [rankedAlbums]);

  const jumpToRank = useCallback((fromIndex: number, toIndex: number) => {
    setRankedAlbums((prev) => {
      const next = [...prev];
      const [removed] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, removed);
      return next;
    });
  }, []);

  return { rankedAlbums, setRankedAlbums, jumpToRank, hasCustomOrder };
}
