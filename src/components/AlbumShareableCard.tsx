"use client";

import React from "react";
import { type Album, getAlbumArtwork } from "@/data/songs";

interface AlbumShareableCardProps {
  rankedAlbums: Album[];
}

export const AlbumShareableCard = React.forwardRef<
  HTMLDivElement,
  AlbumShareableCardProps
>(function AlbumShareableCard({ rankedAlbums }, ref) {
  const topAlbum = rankedAlbums[0];

  if (!topAlbum || rankedAlbums.length === 0) return null;

  const theme = topAlbum.theme;
  // ~90px per row + 200px for header/footer/padding
  const cardHeight = rankedAlbums.length * 90 + 200;

  return (
    <div
      ref={ref}
      style={{
        width: 1080,
        height: cardHeight,
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
          My Taylor Swift Album Ranking
        </h2>
      </div>

      {/* Album rows */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {rankedAlbums.map((album, index) => {
          const artworkUrl = getAlbumArtwork(album.id);
          return (
            <div
              key={album.id}
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
              {artworkUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={artworkUrl}
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
                    fontSize: 30,
                    lineHeight: 1.3,
                    fontWeight: 700,
                    color: theme.textBody,
                    whiteSpace: "nowrap",
                  }}
                >
                  {album.name}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: theme.textBody,
                    opacity: 0.6,
                    marginTop: 1,
                  }}
                >
                  {album.year}
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
          marginTop: 30,
          color: theme.textOnPrimary,
          opacity: 0.6,
          fontSize: 20,
        }}
      >
        Taylor Swift Ranked &middot; {new Date().toLocaleDateString()}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 8,
          color: theme.textOnPrimary,
          opacity: 0.45,
          fontSize: 18,
        }}
      >
        erasranked.com
      </div>
    </div>
  );
});
