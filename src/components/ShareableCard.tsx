"use client";

import React from "react";
import { ALBUMS, type Song } from "@/data/songs";

interface ShareableCardProps {
  rankedSongs: Song[];
}

export const ShareableCard = React.forwardRef<
  HTMLDivElement,
  ShareableCardProps
>(function ShareableCard({ rankedSongs }, ref) {
  const top13 = rankedSongs.slice(0, 13);
  const topAlbum = top13[0] ? ALBUMS[top13[0].albumId] : null;

  if (!topAlbum || top13.length === 0) return null;

  const theme = topAlbum.theme;

  return (
    <div
      ref={ref}
      style={{
        width: 1080,
        height: 1350,
        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
        fontFamily: "system-ui, sans-serif",
        padding: "40px 50px",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "-9999px",
        top: 0,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: theme.textOnPrimary,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          My Taylor Swift Top 13
        </h2>
      </div>

      {/* Song rows */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {top13.map((song, index) => {
          const album = ALBUMS[song.albumId];
          return (
            <div
              key={song.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "8px 20px",
                borderRadius: 14,
                backgroundColor: `${theme.surface}dd`,
              }}
            >
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  width: 50,
                  textAlign: "right",
                  color: theme.primary,
                  fontFamily: "monospace",
                }}
              >
                {index + 1}
              </span>
              {song.artworkUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={song.artworkUrl}
                  alt=""
                  crossOrigin="anonymous"
                  width={64}
                  height={64}
                  style={{ borderRadius: 10, objectFit: "cover" }}
                />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 28,
                    lineHeight: 1.3,
                    fontWeight: 700,
                    color: theme.textBody,
                    whiteSpace: "nowrap",
                  }}
                >
                  {song.title}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    color: theme.textBody,
                    opacity: 0.6,
                    marginTop: 1,
                  }}
                >
                  {album.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: 24,
          color: theme.textOnPrimary,
          opacity: 0.6,
          fontSize: 20,
        }}
      >
        Taylor Swift Ranked &middot; {new Date().toLocaleDateString()}
      </div>
    </div>
  );
});
