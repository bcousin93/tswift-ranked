import { useRef, useState, useCallback, useEffect } from "react";

// Global audio ref so only one song plays at a time
let globalAudio: HTMLAudioElement | null = null;
let globalSetPlaying: ((playing: boolean) => void) | null = null;

export function usePreviewAudio(previewUrl: string | undefined) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (!previewUrl) return;

      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
        return;
      }

      // Stop any other playing song
      if (globalAudio && globalAudio !== audioRef.current) {
        globalAudio.pause();
        globalSetPlaying?.(false);
      }

      if (!audioRef.current) {
        audioRef.current = new Audio(previewUrl);
        audioRef.current.addEventListener("ended", () => setIsPlaying(false));
      }

      audioRef.current.play();
      setIsPlaying(true);
      globalAudio = audioRef.current;
      globalSetPlaying = setIsPlaying;
    },
    [isPlaying, previewUrl]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (globalAudio === audioRef.current) {
        globalAudio = null;
        globalSetPlaying = null;
      }
    };
  }, []);

  return { isPlaying, togglePlay };
}
