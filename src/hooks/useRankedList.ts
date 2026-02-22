"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { SONGS, type Song, type AlbumId } from "@/data/songs";

const STORAGE_KEY = "tswift-ranked-order";

export const ALBUM_ORDER: AlbumId[] = [
  "taylor-swift",
  "fearless",
  "speak-now",
  "red",
  "1989",
  "reputation",
  "lover",
  "folklore",
  "evermore",
  "midnights",
  "tortured-poets",
  "showgirl",
  "holiday",
];

const songMap = new Map(SONGS.map((s) => [s.id, s]));

function loadOrder(): string[] | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const ids: string[] = JSON.parse(stored);
    return ids.filter((id) => songMap.has(id));
  } catch {
    return null;
  }
}

function saveOrder(songIds: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(songIds));
}

export function useRankedList() {
  const [rankedSongs, setRankedSongs] = useState<Song[]>(() => {
    const savedOrder = loadOrder();
    if (savedOrder && savedOrder.length > 0) {
      return savedOrder
        .map((id) => songMap.get(id))
        .filter((s): s is Song => s !== undefined);
    }
    return [];
  });

  useEffect(() => {
    saveOrder(rankedSongs.map((s) => s.id));
  }, [rankedSongs]);

  const rankedIds = useMemo(
    () => new Set(rankedSongs.map((s) => s.id)),
    [rankedSongs]
  );

  const unrankedByAlbum = useMemo(() => {
    const result = {} as Record<AlbumId, Song[]>;
    for (const albumId of ALBUM_ORDER) {
      result[albumId] = [];
    }
    for (const song of SONGS) {
      if (!rankedIds.has(song.id)) {
        result[song.albumId].push(song);
      }
    }
    return result;
  }, [rankedIds]);

  const addSong = useCallback((songId: string, atIndex?: number) => {
    const song = songMap.get(songId);
    if (!song) return;
    setRankedSongs((prev) => {
      if (prev.some((s) => s.id === songId)) return prev;
      const next = [...prev];
      if (atIndex !== undefined && atIndex >= 0 && atIndex <= next.length) {
        next.splice(atIndex, 0, song);
      } else {
        next.push(song);
      }
      return next;
    });
  }, []);

  const removeSong = useCallback((songId: string) => {
    setRankedSongs((prev) => prev.filter((s) => s.id !== songId));
  }, []);

  const jumpToRank = useCallback((fromIndex: number, toIndex: number) => {
    setRankedSongs((prev) => {
      const next = [...prev];
      const [removed] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, removed);
      return next;
    });
  }, []);

  return {
    rankedSongs,
    setRankedSongs,
    unrankedByAlbum,
    addSong,
    removeSong,
    jumpToRank,
  };
}
