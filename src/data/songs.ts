export type AlbumId =
  | "taylor-swift"
  | "fearless"
  | "speak-now"
  | "red"
  | "1989"
  | "reputation"
  | "lover"
  | "folklore"
  | "evermore"
  | "midnights"
  | "tortured-poets"
  | "showgirl"
  | "holiday"
  | "singles";

export interface AlbumTheme {
  primary: string;
  secondary: string;
  textOnPrimary: string;
  textBody: string;
  surface: string;
  surfaceBorder: string;
  fontVar: string;
}

export interface Album {
  id: AlbumId;
  name: string;
  year: number;
  theme: AlbumTheme;
}

export interface Song {
  id: string;
  title: string;
  albumId: AlbumId;
  trackNumber: number;
  previewUrl?: string;
  artworkUrl?: string;
}

export const ALBUMS: Record<AlbumId, Album> = {
  "taylor-swift": {
    id: "taylor-swift",
    name: "Taylor Swift",
    year: 2006,
    theme: {
      primary: "#0d9488",
      secondary: "#2dd4bf",
      textOnPrimary: "#ffffff",
      textBody: "#0f172a",
      surface: "#ccfbf1",
      surfaceBorder: "#99f6e4",
      fontVar: "--font-era-taylor-swift",
    },
  },
  fearless: {
    id: "fearless",
    name: "Fearless",
    year: 2008,
    theme: {
      primary: "#d4943a",
      secondary: "#e8b86d",
      textOnPrimary: "#ffffff",
      textBody: "#3d2200",
      surface: "#fdf0db",
      surfaceBorder: "#f0d5a0",
      fontVar: "--font-era-fearless",
    },
  },
  "speak-now": {
    id: "speak-now",
    name: "Speak Now",
    year: 2010,
    theme: {
      primary: "#7c3aed",
      secondary: "#a78bfa",
      textOnPrimary: "#ffffff",
      textBody: "#1e1b4b",
      surface: "#ede9fe",
      surfaceBorder: "#c4b5fd",
      fontVar: "--font-era-speak-now",
    },
  },
  red: {
    id: "red",
    name: "Red",
    year: 2012,
    theme: {
      primary: "#8b2042",
      secondary: "#c04060",
      textOnPrimary: "#ffffff",
      textBody: "#2a0a15",
      surface: "#fce4ec",
      surfaceBorder: "#f1a7b8",
      fontVar: "--font-era-red",
    },
  },
  "1989": {
    id: "1989",
    name: "1989",
    year: 2014,
    theme: {
      primary: "#89c4e1",
      secondary: "#b5ddf0",
      textOnPrimary: "#0a3350",
      textBody: "#0c3d5e",
      surface: "#e8f4fa",
      surfaceBorder: "#c2e2f0",
      fontVar: "--font-era-1989",
    },
  },
  reputation: {
    id: "reputation",
    name: "Reputation",
    year: 2017,
    theme: {
      primary: "#18181b",
      secondary: "#3f3f46",
      textOnPrimary: "#fafafa",
      textBody: "#e4e4e7",
      surface: "#27272a",
      surfaceBorder: "#3f3f46",
      fontVar: "--font-era-reputation",
    },
  },
  lover: {
    id: "lover",
    name: "Lover",
    year: 2019,
    theme: {
      primary: "#e8829b",
      secondary: "#f0a8bb",
      textOnPrimary: "#ffffff",
      textBody: "#3d0f1e",
      surface: "#fde8ef",
      surfaceBorder: "#f5c0d0",
      fontVar: "--font-era-lover",
    },
  },
  folklore: {
    id: "folklore",
    name: "Folklore",
    year: 2020,
    theme: {
      primary: "#9e9a91",
      secondary: "#b8b4ab",
      textOnPrimary: "#ffffff",
      textBody: "#292524",
      surface: "#f0eeeb",
      surfaceBorder: "#d4d0c9",
      fontVar: "--font-era-folklore",
    },
  },
  evermore: {
    id: "evermore",
    name: "Evermore",
    year: 2020,
    theme: {
      primary: "#a08060",
      secondary: "#c4a882",
      textOnPrimary: "#ffffff",
      textBody: "#2c1e10",
      surface: "#f0e8dd",
      surfaceBorder: "#d4c4a8",
      fontVar: "--font-era-folklore",
    },
  },
  midnights: {
    id: "midnights",
    name: "Midnights",
    year: 2022,
    theme: {
      primary: "#1a1f3d",
      secondary: "#2a3060",
      textOnPrimary: "#d0d4f0",
      textBody: "#d0d4f0",
      surface: "#222848",
      surfaceBorder: "#353b68",
      fontVar: "--font-era-midnights",
    },
  },
  "tortured-poets": {
    id: "tortured-poets",
    name: "The Tortured Poets Department",
    year: 2024,
    theme: {
      primary: "#e8e4df",
      secondary: "#d4cfc8",
      textOnPrimary: "#1a1714",
      textBody: "#1a1714",
      surface: "#f8f6f3",
      surfaceBorder: "#ddd8d0",
      fontVar: "--font-era-tortured-poets",
    },
  },
  showgirl: {
    id: "showgirl",
    name: "The Life of a Showgirl",
    year: 2025,
    theme: {
      primary: "#c2185b",
      secondary: "#e91e63",
      textOnPrimary: "#fff8e1",
      textBody: "#3e1020",
      surface: "#fce4ec",
      surfaceBorder: "#f48fb1",
      fontVar: "--font-era-showgirl",
    },
  },
  holiday: {
    id: "holiday",
    name: "Holiday Collection",
    year: 2007,
    theme: {
      primary: "#b71c1c",
      secondary: "#d32f2f",
      textOnPrimary: "#ffffff",
      textBody: "#1b0a0a",
      surface: "#ffebee",
      surfaceBorder: "#ef9a9a",
      fontVar: "--font-era-taylor-swift",
    },
  },
  singles: {
    id: "singles",
    name: "Singles",
    year: 2019,
    theme: {
      primary: "#5c6bc0",
      secondary: "#7986cb",
      textOnPrimary: "#ffffff",
      textBody: "#1a237e",
      surface: "#e8eaf6",
      surfaceBorder: "#9fa8da",
      fontVar: "--font-era-midnights",
    },
  },
};

function s(albumId: AlbumId, trackNumber: number, title: string, previewUrl?: string, artworkUrl?: string): Song {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
  return { id: `${albumId}-${slug}`, title, albumId, trackNumber, previewUrl, artworkUrl };
}

export const SONGS: Song[] = [
  // ── Taylor Swift (2006) ──
  s("taylor-swift", 1, "Tim McGraw", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4d/9f/fd/4d9ffd05-b520-fee9-292b-f0d217df21b9/mzaf_6042400680719050354.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 2, "Picture to Burn", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/40/93/22/4093227b-5416-0f84-2026-6f46e0684037/mzaf_10638365799445615051.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 3, "Teardrops on My Guitar", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/65/bb/81/65bb81da-df73-d643-9ed1-a8794cda7df7/mzaf_14103897559568687663.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 4, "A Place in This World", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/5f/94/005f94e0-589a-fc8c-c054-1ae7d754168d/mzaf_5493859050518670329.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 5, "Cold as You", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/70/ba/8e/70ba8efa-a5f5-dee7-6d10-01f0850883eb/mzaf_15084594022141496296.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 6, "The Outside", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1c/58/a8/1c58a808-db4b-381c-f00f-3d956ed41290/mzaf_8696859644001869059.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 7, "Tied Together with a Smile", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/62/71/4462712c-1fab-8580-07c1-bab342e7da7d/mzaf_14491416428665857715.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 8, "Stay Beautiful", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2d/e8/36/2de836bb-b007-feea-49ff-0c9071b8bd0b/mzaf_1455130659853826745.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 9, "Should've Said No", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ea/5c/da/ea5cda50-e74b-c90a-d934-57455ac46d8e/mzaf_13731495979733963023.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 10, "Mary's Song (Oh My My My)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ef/dd/6c/efdd6c98-fd56-37f1-13a3-b07e3e57a70a/mzaf_824036816255400691.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 11, "Our Song", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/42/8d/38428d9c-28f3-2b6b-51c3-3574e63243cd/mzaf_4136650510022149351.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  // Deluxe
  s("taylor-swift", 12, "I'm Only Me When I'm with You", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1d/3e/f2/1d3ef2fc-6faf-20b8-4201-d0753d8fe4e6/mzaf_6761882924284081896.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 13, "Invisible", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1b/be/39/1bbe39ab-45e1-5c65-b604-d3d4ae60c8d8/mzaf_17966302020354409655.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),
  s("taylor-swift", 14, "A Perfectly Good Heart", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6b/d7/42/6bd74220-33ae-1aa0-9691-5ba907b09ef0/mzaf_16038365616108943614.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/be/e1/48/bee148d6-d16c-d8f7-0173-d6cf6d684aa1/08PNDIM00678.rgb.jpg/600x600bb.jpg"),

  // ── Fearless (2008 / Taylor's Version 2021) ──
  s("fearless", 1, "Fearless", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5f/a7/8e/5fa78e25-42ee-9360-66ac-e79affc2c861/mzaf_15623703459313946579.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 2, "Fifteen", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/db/0a/a4/db0aa414-eef2-13b8-3e58-4787cfd25ba5/mzaf_17699384698963600462.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 3, "Love Story", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8b/4c/b3/8b4cb3a5-b1d1-c82c-e6ab-48cc3969d4ff/mzaf_858711921713575608.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 4, "Hey Stephen", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4d/89/d0/4d89d09d-be45-41f6-be0c-029c60b46837/mzaf_9256638291005429053.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 5, "White Horse", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c9/2c/e7/c92ce766-cadf-201b-d919-dedb42f73799/mzaf_16666051376822558727.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 6, "You Belong with Me", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ec/84/f2/ec84f262-1498-583f-dd5b-cd1a78587bce/mzaf_8651470950553551918.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 7, "Breathe", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5a/51/d2/5a51d28c-d7b1-7cac-5a15-48f2f3685417/mzaf_5723721714906913752.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 8, "Tell Me Why", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f5/f8/77/f5f87758-240e-a1c0-0a3d-fb5babb1dbf5/mzaf_12726189327457248115.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 9, "You're Not Sorry", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c3/70/2f/c3702f9e-5820-e4cf-e88a-dc9bee6671b5/mzaf_6723897613683959082.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 10, "The Way I Loved You", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9e/7d/c7/9e7dc7b8-e736-be6a-00be-b0427bba2b21/mzaf_4148939288855554219.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 11, "Forever & Always", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/70/bc/e9/70bce9da-e0a7-b7e3-4187-d98d87076773/mzaf_17389516473920845960.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 12, "The Best Day", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d6/e4/11/d6e411b0-c001-e9bb-fe8f-ce070a6da2cb/mzaf_8045166961636267103.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 13, "Change", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2a/7d/e2/2a7de27f-e693-a31f-6cfe-cffdf46f1e36/mzaf_16922478598714905095.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  // Deluxe / Platinum
  s("fearless", 14, "Jump Then Fall", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/09/25/06/09250684-90dc-9164-38ee-c067db75ed58/mzaf_14440747767823562273.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 15, "Untouchable", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/90/cb/8e/90cb8e33-4730-5ba3-84bc-5b453ae759e7/mzaf_1339416340440925989.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 16, "Forever & Always (Piano Version)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/36/1d/6c/361d6c32-8edf-ba27-9d82-dcaf7cdaede4/mzaf_1993737760627508655.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 17, "Come in with the Rain", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/de/6d/20/de6d201f-7e08-99b2-4ef9-6984e70cd885/mzaf_3451052479864135251.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 18, "SuperStar", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bd/52/88/bd528802-c72e-fb25-7550-3bc6f30d7587/mzaf_16082210440885335276.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 19, "The Other Side of the Door", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/17/6c/5f/176c5f7f-baad-fa79-2878-51c3ed05d459/mzaf_17057492662994524215.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  // Vault tracks
  s("fearless", 20, "You All Over Me", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b6/42/bf/b642bfce-f47c-ec49-f7a7-3a463d096a2b/mzaf_6767842404755476033.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 21, "Mr. Perfectly Fine", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8b/20/f8/8b20f879-e58f-2148-d468-e109fa5df750/mzaf_17851335705978599785.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 22, "We Were Happy", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d0/88/da/d088da27-b706-5ab6-c4ed-6bdf298dde3a/mzaf_13777560500256273874.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 23, "That's When", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/4b/ff/884bff88-5a30-9609-feeb-a69bfbd904d6/mzaf_181916077214166606.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 24, "Don't You", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1f/b2/0a/1fb20ac6-967c-453e-9fc6-31bc5cf1a31b/mzaf_17695026666326435759.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 25, "Bye Bye Baby", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5c/b9/e2/5cb9e22a-9d60-9fdb-302b-6896ca365ea6/mzaf_10555105550249957303.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("fearless", 26, "Today Was A Fairytale", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b6/42/bf/b642bfce-f47c-ec49-f7a7-3a463d096a2b/mzaf_6767842404755476033.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/c3/d0/1c/c3d01c88-73e7-187e-fd62-e1744de979a6/21UMGIM09915.rgb.jpg/600x600bb.jpg"),

  // ── Speak Now (2010 / Taylor's Version 2023) ──
  s("speak-now", 1, "Mine", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/64/78/6f/64786fbc-3294-4561-d02f-87adda756293/mzaf_12118142068342740523.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 2, "Sparks Fly", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/99/9d/71/999d71f9-f6f7-4d49-ac9d-b850279705c5/mzaf_5170441110333630593.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 3, "Back to December", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/42/1c/46/421c469d-24b6-877f-a4c1-dc6581741100/mzaf_15041388320379290486.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3b/02/ea/3b02ea2d-2586-59d7-d2b8-e9b6af6b52b3/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 4, "Speak Now", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2f/81/e9/2f81e9bc-11de-2ff2-424a-838f221a8f92/mzaf_10049334175784997815.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 5, "Dear John", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/57/86/93/57869344-47b0-49ce-ca2d-9ee0a68d576f/mzaf_14006139805061245545.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 6, "Mean", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a0/55/08/a055087b-0a62-7694-ec4d-6d0995b8d2e5/mzaf_17131077113928625022.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3b/02/ea/3b02ea2d-2586-59d7-d2b8-e9b6af6b52b3/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 7, "The Story of Us", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4b/1a/66/4b1a66d4-d9b1-af2a-9351-519e7b2980a9/mzaf_3601476588632793055.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 8, "Never Grow Up", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/21/4f/d7/214fd764-5359-f54c-d8b5-a264c887275f/mzaf_14949013389196541471.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 9, "Enchanted", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/33/63/50/336350ec-d6f0-1831-c639-dd009c893e7a/mzaf_3648057001771236136.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3b/02/ea/3b02ea2d-2586-59d7-d2b8-e9b6af6b52b3/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 10, "Better than Revenge", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/f8/16/88f81682-3ef0-eb40-0387-82792a46f00f/mzaf_17887421457421815022.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 11, "Innocent", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4b/fd/2b/4bfd2baf-0811-7bdf-13d3-9574d0045637/mzaf_7948131214907023522.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 12, "Haunted", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/35/46/77/354677b6-3496-fd81-1db3-530b054d1e2b/mzaf_3721096324089244235.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 13, "Last Kiss", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/b9/b0/17b9b03f-e086-49bc-6b42-3846bdee5d23/mzaf_1772843515932535138.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 14, "Long Live", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a4/52/49/a4524983-4279-ba87-dfda-0a0a714779e4/mzaf_12329578044699473486.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  // Deluxe
  s("speak-now", 15, "Ours", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/2f/86/002f86ae-da58-b207-7a73-c977bb23df0c/mzaf_10251505993305779734.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 16, "If This Was a Movie", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f1/33/a7/f133a7db-f209-1a7f-cf5f-73f3a4d50587/mzaf_11831254274676625086.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 17, "Superman", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e2/b4/99/e2b49955-9091-3bbe-d2d9-0e5bd64b79a5/mzaf_6261468764891665837.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  // Vault tracks
  s("speak-now", 18, "When Emma Falls in Love", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c6/2e/be/c62ebec3-07c6-ffbf-9f2b-dcd6b4934eb8/mzaf_11765969466458493849.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 19, "I Can See You", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/93/0b/a3/930ba37a-9887-c3db-0a89-53db561ed3c1/mzaf_7029006724342466435.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 20, "Castles Crumbling", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/32/35/41/32354109-02e6-2221-2e08-6ba1e4c471ce/mzaf_6434350033388052668.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 21, "Foolish One", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c4/03/e2/c403e20e-fc44-900f-c652-65371c1cdf17/mzaf_15938936055195488883.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 22, "Timeless", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d9/29/8c/d9298cf2-6b92-88b9-cf84-6937fb779ac3/mzaf_6579005751018455072.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),
  s("speak-now", 23, "Electric Touch (feat. Fall Out Boy)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e2/b4/99/e2b49955-9091-3bbe-d2d9-0e5bd64b79a5/mzaf_6261468764891665837.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3c/0a/9f3c0a60-f9e0-a34e-60e5-0be1f182896b/23UMGIM63932.rgb.jpg/600x600bb.jpg"),

  // ── Red (2012 / Taylor's Version 2021) ──
  s("red", 1, "State of Grace", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a7/6c/73/a76c7306-8089-a2db-983e-9d3c11accfbd/mzaf_1565871373534895246.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 2, "Red", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e3/d6/06/e3d606fb-5843-664e-9524-c9b51698bfc4/mzaf_18049265731026484178.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 3, "Treacherous", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/10/7b/5b/107b5b81-81f0-125c-c013-d215bd8b5509/mzaf_1778331264248963653.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 4, "I Knew You Were Trouble", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d4/37/56/d437565b-2e7e-7ca5-bd72-406db3afc807/mzaf_3670144894530657454.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 5, "All Too Well", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1e/cc/b2/1eccb2f4-bcf9-d6ff-34a4-f1ca47802f30/mzaf_254602999881880297.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 6, "22", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/58/08/40/58084037-57c2-cc41-19b4-b4f16e5a0fdc/mzaf_6990360577096786143.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 7, "I Almost Do", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/16/bd/64/16bd6442-ed48-741f-ae5d-d5b88cdf0596/mzaf_7696231610731716404.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 8, "We Are Never Ever Getting Back Together", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ff/56/36/ff563658-e316-8aac-f974-f1bded320293/mzaf_4214775990903312338.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 9, "Stay Stay Stay", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ba/77/bd/ba77bd8b-8b66-37b6-6e83-48e6ac741972/mzaf_4127385603721814631.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 10, "The Last Time", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e0/1c/a1/e01ca172-c43c-c06a-f857-b6647930b05a/mzaf_1603897862567034512.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 11, "Holy Ground", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5b/16/4a/5b164ae4-8da1-82a8-5ceb-e68bfc3ea340/mzaf_11617837042960682144.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 12, "Sad Beautiful Tragic", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/fa/ef/33/faef33c2-021e-1bdc-701f-bd67537a51bd/mzaf_12869755564458373462.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 13, "The Lucky One", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a6/f7/81/a6f7811f-1458-8028-4c21-a5a5b58501aa/mzaf_4570621325699363692.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 14, "Everything Has Changed", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/58/e1/00/58e10072-a423-ab49-10eb-0e5da46a9c87/mzaf_5881345665562272465.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 15, "Starlight", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/ab/82/94ab82f1-8e8c-0107-29ba-e9b0be900cf1/mzaf_10724651824983868296.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 16, "Begin Again", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/74/68/5b/74685be9-b4cf-f9ab-6bf5-c893ac631529/mzaf_1820138202217204929.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  // Deluxe
  s("red", 17, "The Moment I Knew", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cf/6f/d8/cf6fd864-925a-639f-10e8-82135daa6944/mzaf_1713754373366863023.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 18, "Come Back... Be Here", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8f/f8/89/8ff8896c-2b15-56dc-510b-9d73d3c004c0/mzaf_6674178946150253602.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 19, "Girl at Home", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/31/dd/f131dd9c-56a9-82d6-f2bd-a7739c4632d4/mzaf_310391231045501646.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/94/95/85/94958532-4e64-f3b3-84b2-f4d207e31c85/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  // Vault tracks
  s("red", 20, "Better Man", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/58/0c/db/580cdb14-5696-f123-ccc3-8d04bd76525e/mzaf_17305298295626111754.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e1/b1/04/e1b10422-f39c-a8c7-195b-ebdb8c05489c/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 21, "Nothing New", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8f/b2/3d/8fb23de2-e8a1-90f4-dbf4-5b54b3b35788/mzaf_12004904358534244651.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/38/9b/15389bf4-8074-06c3-11ee-655b5453af68/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 22, "Babe", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/20/58/74/2058749e-7cfb-adf2-9a1c-7632be36fc62/mzaf_10227664956640385074.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/38/9b/15389bf4-8074-06c3-11ee-655b5453af68/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 23, "Message in a Bottle", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b2/ed/9a/b2ed9ad5-f820-5804-054f-61fcf413a8fd/mzaf_15119525806509365320.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e1/b1/04/e1b10422-f39c-a8c7-195b-ebdb8c05489c/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 24, "I Bet You Think About Me", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/95/5c/70/955c7002-83cc-75d1-f71a-b70eee14819d/mzaf_13942241141805417727.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e1/b1/04/e1b10422-f39c-a8c7-195b-ebdb8c05489c/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 25, "Forever Winter", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9c/6e/84/9c6e84b6-6339-d7ee-9748-24366f1d6695/mzaf_9870915614919399267.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/38/9b/15389bf4-8074-06c3-11ee-655b5453af68/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 26, "Run", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a1/25/e8/a125e848-28d6-78dc-7451-3a5ce54b9ca5/mzaf_3661724658436037077.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/38/9b/15389bf4-8074-06c3-11ee-655b5453af68/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 27, "The Very First Night", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c1/b8/f3/c1b8f3ab-a735-7273-eaf0-22e374bc0a18/mzaf_14268180634692722510.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/38/9b/15389bf4-8074-06c3-11ee-655b5453af68/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 28, "All Too Well (10 Minute Version)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a4/5b/33/a45b3365-0139-7e47-73c6-28a2c214bd62/mzaf_12675623427771170054.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c6/27/9c/c6279c07-9329-827d-31c4-f5d4c7d99ff4/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("red", 29, "Ronan (Taylor's Version)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a9/a3/c2/a9a3c215-c902-adb6-ca68-e82715e3dfdb/mzaf_16696370889545528795.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/15/38/9b/15389bf4-8074-06c3-11ee-655b5453af68/21UM1IM25046.rgb.jpg/600x600bb.jpg"),

  // ── 1989 (2014 / Taylor's Version 2023) ──
  s("1989", 1, "Welcome to New York", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e1/a8/59/e1a859cd-bcfc-f56d-a6c9-f596e815fa61/mzaf_7432994354090760572.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 2, "Blank Space", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/86/fb/ae/86fbae33-25de-15c0-7c2a-ddff0184015d/mzaf_702089464259026596.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 3, "Style", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/c3/2b/88c32bb1-395a-1788-aac9-41b4cdd94a00/mzaf_3234809686154416095.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 4, "Out of the Woods", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/74/33/d5743386-c33d-dc8c-392d-433ea1831f16/mzaf_13494386819701256444.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 5, "All You Had to Do Was Stay", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/44/66/46/4466469d-bccd-e896-3939-c924bac7406b/mzaf_2331922361360203131.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 6, "Shake It Off", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fa/63/4a/fa634ad2-7da9-52f7-93d2-5c9cab3df710/mzaf_2910957013016109748.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 7, "I Wish You Would", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b9/79/f2/b979f23f-180f-f25f-36ea-f70c439827e6/mzaf_14838511091834545079.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 8, "Bad Blood", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2e/5e/7b/2e5e7ba7-7b7f-ab7f-eab7-3ccf4ad12478/mzaf_17636575405914632989.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 9, "Wildest Dreams", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/45/26/a4/4526a416-a6ee-44a1-92a5-bde8369d898c/mzaf_7980441848261718723.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 10, "How You Get the Girl", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/5d/4c/f85d4caa-7fec-fbd0-361a-e81891df9223/mzaf_14400226814696963682.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 11, "This Love", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9c/fe/05/9cfe0591-983c-7088-94ee-683ffb818002/mzaf_11370908061854433450.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 12, "I Know Places", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/10/48/cf/1048cf37-08ac-b1c7-a6e8-5ada8cc6d729/mzaf_6381769364283503913.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 13, "Clean", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e2/4d/64/e24d6448-da7c-cdbc-86a9-ef8c357f8814/mzaf_6027279354318821413.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  // Deluxe
  s("1989", 14, "Wonderland", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c0/6c/11/c06c118c-8547-92f6-7481-1f5e060e8c18/mzaf_18384786343174972272.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 15, "You Are in Love", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4c/41/8f/4c418f95-87ad-3672-893f-09d0494995e1/mzaf_661193920902745304.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 16, "New Romantics", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b0/dc/30/b0dc3093-3ea1-844b-6385-eecf930041cb/mzaf_14398356595949961069.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  // Vault tracks
  s("1989", 17, "\"Slut!\"", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bc/3a/6b/bc3a6b00-061e-7665-6aba-e972ed5ff55a/mzaf_15236610005995231416.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 18, "Say Don't Go", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ca/80/b6/ca80b61d-0cd9-1258-f921-5661e25417a1/mzaf_12707476446883977649.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 19, "Now That We Don't Talk", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/18/33/32/18333271-5c9a-b794-27ed-be9b3a1c340e/mzaf_4581353890558777841.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 20, "Suburban Legends", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d3/71/9d/d3719d46-cba6-8ad8-01ad-5b3266985788/mzaf_12827265245164539275.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),
  s("1989", 21, "Is It Over Now?", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9d/e2/aa/9de2aacc-36ff-6527-4d2e-be0c832dcb91/mzaf_18039849064642187364.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8e/35/6c/8e356cc2-0be4-b83b-d29e-b578623df2ac/23UM1IM34052.rgb.jpg/600x600bb.jpg"),

  // ── Reputation (2017) ──
  s("reputation", 1, "...Ready for It?", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ec/4c/66/ec4c6665-6fdd-e31f-984d-60ab919e865b/mzaf_11118961438428757175.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 2, "End Game", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0a/e5/28/0ae52806-8f53-89af-17a7-870ec7afbafa/mzaf_8134453282110182509.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 3, "I Did Something Bad", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b5/0f/ad/b50fad30-c845-feb5-11f5-daa615684c25/mzaf_1013641343442858000.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 4, "Don't Blame Me", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/89/7f/e3/897fe3af-e50c-5056-76c8-94d944406980/mzaf_5316514300927719419.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 5, "Delicate", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a7/24/e8/a724e804-d5df-f7a7-24cc-09df9df57a79/mzaf_4087189896444308455.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 6, "Look What You Made Me Do", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3b/26/64/3b26645a-2c49-f0c7-fa6d-be6ad83b0ae9/mzaf_4194244291813253017.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 7, "So It Goes...", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f6/c6/7b/f6c67ba8-3d98-8fac-5d18-6b2ee6141cfe/mzaf_11116889445673600006.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 8, "Gorgeous", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b5/c7/76/b5c77613-f75e-1895-f9ed-a39a0907dec0/mzaf_8863959442271111939.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 9, "Getaway Car", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4b/db/4c/4bdb4c1e-e19e-5e71-1b49-8a1eaad716ba/mzaf_13094202028105221330.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 10, "King of My Heart", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/aa/8f/b3/aa8fb3e8-a650-2cd8-3c7f-c6cb8a9f120a/mzaf_9099117291445889903.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 11, "Dancing with Our Hands Tied", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4d/24/88/4d24885e-992a-7041-832e-46553cc9e0fb/mzaf_2207202347543526977.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 12, "Dress", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f9/b9/a0/f9b9a02c-ab34-fc11-38c9-03123fce5af3/mzaf_11239960203526844288.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 13, "This Is Why We Can't Have Nice Things", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5c/85/6d/5c856d92-25c5-32aa-d195-ae540c38a4fe/mzaf_643501702544204130.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 14, "Call It What You Want", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8f/f7/b9/8ff7b9d6-cc79-e3f4-cabe-dd389fbc238b/mzaf_2380187364781949116.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),
  s("reputation", 15, "New Year's Day", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/df/14/1d/df141dfe-92f9-8293-9043-4d1f9da23227/mzaf_14994574548118643059.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/eb/e6/06/ebe606da-e00f-82d3-47f3-b79904eed541/17UM1IM24651.rgb.jpg/600x600bb.jpg"),

  // ── Lover (2019) ──
  s("lover", 1, "I Forgot That You Existed", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9c/e2/97/9ce2976a-b1c8-aa80-3e94-f4562cbad53e/mzaf_11906958635430192793.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 2, "Cruel Summer", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/af/81/44af8168-9609-1b85-5048-ada08dceacf3/mzaf_1341699644335558812.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 3, "Lover", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e0/db/47/e0db47b0-7f70-0631-0414-cd4777d2fb3e/mzaf_6362891154838442638.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 4, "The Man", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3b/b7/c6/3bb7c6f7-d06f-f91c-7801-0ed0a6257e1c/mzaf_12747815097409700369.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 5, "The Archer", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/20/f2/f1/20f2f134-3309-4185-a94a-60874c49d529/mzaf_191729209789352081.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 6, "I Think He Knows", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/36/5e/3f/365e3fba-8094-a148-2bd4-3dd6a0955ffe/mzaf_9018492115665734709.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 7, "Miss Americana & the Heartbreak Prince", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8e/94/60/8e946056-a91f-77be-f615-f4f717908723/mzaf_9075445817267686583.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 8, "Paper Rings", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/05/2d/b7/052db7e1-e5cf-bfba-c309-9b3e31edeb37/mzaf_11390896675529863162.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 9, "Cornelia Street", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6a/f9/32/6af93277-3dca-7a00-edd0-5386ce4dd123/mzaf_18277705604040396242.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 10, "Death by a Thousand Cuts", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8d/c5/6a/8dc56a4e-ea68-b459-9797-d6930467b414/mzaf_9247743533036363661.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 11, "London Boy", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f2/34/0c/f2340c41-81b0-a5f6-b61b-6f41a395d6c4/mzaf_7441079905742391154.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 12, "Soon You'll Get Better", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/67/1d/fb/671dfbf5-1b2a-3809-1e6c-c834fb737478/mzaf_6885608076404289573.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 13, "False God", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d5/3e/67/d53e6714-03cb-7365-9351-c280e8abac35/mzaf_10316874145459051650.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 14, "You Need to Calm Down", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e8/80/4f/e8804fa1-6118-74fd-4602-b96969ebef41/mzaf_5457103975229379192.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 15, "Afterglow", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/eb/86/30/eb863040-ef55-fa8e-cb45-e27cedbe9e46/mzaf_5312643549713230502.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 16, "ME!", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c5/6f/e3/c56fe3a6-2f25-b545-6135-aaba0a838569/mzaf_1819099962104489735.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 17, "It's Nice to Have a Friend", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/94/75/0c/94750c81-f080-d583-650f-9b96df6709cb/mzaf_14727730034427264252.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("lover", 18, "Daylight", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9d/10/f6/9d10f6cc-8fa8-8ea1-1323-edabdcdeadae/mzaf_15969938021558823306.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg"),

  // ── Folklore (2020) ──
  s("folklore", 1, "the 1", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/57/d2/20/57d22011-7ad6-0319-3f3f-ff6f73e471e9/mzaf_10096358262150358620.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8c/ef/c2/8cefc23a-61b7-05ff-b52a-bb1e4922087c/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 2, "cardigan", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cc/70/62/cc7062c7-8b0d-f120-86fa-27b4a92cdbb6/mzaf_6583526239524954650.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 3, "the last great american dynasty", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/17/95/27/179527e1-cd97-7ae3-fe70-e0fda1e5396d/mzaf_16962261064999092500.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8c/ef/c2/8cefc23a-61b7-05ff-b52a-bb1e4922087c/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 4, "exile", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/91/72/60/91726042-5d09-906e-7857-cc73cab48c44/mzaf_17575767385193031900.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 5, "my tears ricochet", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b0/be/92/b0be92d6-f4f1-c669-7477-84d21692c864/mzaf_12906232341697105270.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 6, "mirrorball", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/88/47/84/88478439-f8a4-4e12-58d1-4fc1cd509f01/mzaf_834936961761825709.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 7, "seven", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ec/9e/ce/ec9ece34-aab3-848f-2da1-f0114a6b7bb0/mzaf_17386815438652895070.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 8, "august", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/37/28/b2/3728b2ae-9342-fc08-336f-30cf839096f2/mzaf_4924373909578334324.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 9, "this is me trying", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/00/84/ed/0084edbf-1e99-483f-927c-6efc24c4ad77/mzaf_3101327111758999880.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 10, "illicit affairs", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bf/60/7e/bf607e0d-b826-3664-7eca-cacfff97ddd9/mzaf_10350438148915440498.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 11, "invisible string", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e5/d5/bd/e5d5bdf8-0bb6-8a73-eaff-a1ef4174fec4/mzaf_6000389577842500875.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 12, "mad woman", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2d/ca/99/2dca99ba-c6e8-2fb5-52d8-1569e9a72221/mzaf_2402896817732313954.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7c/04/ba/7c04ba17-2ff8-21b3-0ac0-7d141f86e924/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 13, "epiphany", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/05/f8/c6/05f8c6a3-6492-03ca-9861-c6ced7125757/mzaf_17476229766365424385.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 14, "betty", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ba/d1/6c/bad16c72-f5c7-f65a-7636-37122b0ab883/mzaf_3552277813539706990.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ca/f3/67/caf367a5-2cf6-6b2e-a891-97dc57b19f08/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 15, "peace", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0f/e1/98/0fe1988d-8f26-fec9-7eea-38e2cf1679f6/mzaf_13313001112079580471.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/7c/04/ba/7c04ba17-2ff8-21b3-0ac0-7d141f86e924/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  s("folklore", 16, "hoax", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f4/b6/43/f4b643bf-6403-7eaf-f679-41ed0eff48e1/mzaf_373151223857872299.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),
  // Deluxe
  s("folklore", 17, "the lakes", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f8/e6/f8/f8e6f870-6629-eabb-1d16-8e92bff8b0ce/mzaf_3558030778632956583.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/80/dc/b580dca0-349d-036b-e09b-bd849f6affd8/20UMGIM64216.rgb.jpg/600x600bb.jpg"),

  // ── Evermore (2020) ──
  s("evermore", 1, "willow", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e8/fe/12/e8fe121d-8607-9535-8752-2c6db57c6882/mzaf_16621458186258029528.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 2, "champagne problems", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/11/e2/2b/11e22bb4-cc72-e7d4-aac0-06fa019d46da/mzaf_2587148859302446496.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/18/93/99/189399a7-95e1-324b-e40a-bd9e3ea22a95/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 3, "gold rush", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/4e/19/944e19c9-73c5-9757-022d-13a19c750ff3/mzaf_10179982655559500727.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/18/93/99/189399a7-95e1-324b-e40a-bd9e3ea22a95/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 4, "'tis the damn season", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e1/20/21/e12021bf-0db6-0f68-46a7-759935c80484/mzaf_11391586478934612004.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 5, "tolerate it", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/57/b0/84/57b084bc-1329-c26e-bb67-123b70387429/mzaf_7154805772145296462.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/18/93/99/189399a7-95e1-324b-e40a-bd9e3ea22a95/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 6, "no body, no crime", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/df/9e/27/df9e271d-8420-c090-6ff1-2d41d2500190/mzaf_15227079610702435133.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 7, "happiness", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/f5/ea/d5f5ea8f-de61-90dd-a4ca-080f6ba61364/mzaf_12296779517749899054.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/18/93/99/189399a7-95e1-324b-e40a-bd9e3ea22a95/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 8, "dorothea", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/47/15/e9/4715e920-4d94-1bdb-44cd-d8c974bc302e/mzaf_3182957489833820663.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 9, "coney island", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1b/f6/a3/1bf6a306-6a78-ac78-e2e1-dbe6fdcab780/mzaf_14638209072371991879.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 10, "ivy", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5a/75/65/5a7565f3-343b-6862-7464-384ea0df7d74/mzaf_10117469142818202883.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/18/93/99/189399a7-95e1-324b-e40a-bd9e3ea22a95/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 11, "cowboy like me", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d8/c1/a9/d8c1a9c5-8a7c-6882-af51-615cc70a5dfb/mzaf_10173316200351227997.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/18/93/99/189399a7-95e1-324b-e40a-bd9e3ea22a95/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 12, "long story short", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e0/c2/7f/e0c27f6e-c087-fbc7-84ed-276d84028c6d/mzaf_2421847857347404410.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 13, "marjorie", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dc/fa/72/dcfa72ea-8280-3559-df08-d289669d76eb/mzaf_17708694037789576814.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 14, "closure", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d8/c5/95/d8c5955e-e778-fb7d-7be2-7542aa5a1df4/mzaf_3490172214855357227.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 15, "evermore", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/83/0a/02/830a024e-6553-a3e1-32ce-fcd869aecafb/mzaf_9180359073405677413.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  // Deluxe
  s("evermore", 16, "right where you left me", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/27/73/f2/2773f2e6-bb80-a6c6-afd2-0ac673088098/mzaf_11458890150394576836.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),
  s("evermore", 17, "it's time to go", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9c/c6/3a/9cc63ac3-199c-a273-dcf5-f026628320c8/mzaf_15203856036405020413.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/44/e3/94/44e3945f-d613-09f8-538a-aba063d59358/20UM1IM14847.rgb.jpg/600x600bb.jpg"),

  // ── Midnights (2022) ──
  s("midnights", 1, "Lavender Haze", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a9/14/36/a91436d3-2f9b-7953-c6e2-705d2802570d/mzaf_11159633409289561031.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 2, "Maroon", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/84/6f/e1/846fe158-3145-f110-3377-f25873a2b9d6/mzaf_8094175221494982272.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 3, "Anti-Hero", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e4/fb/8d/e4fb8d01-6ae3-c2af-4d1a-73ec21533336/mzaf_13870831216693120811.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 4, "Snow on the Beach", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/df/43/2a/df432a1c-b13e-26fa-dfcb-fa313c7e5f4d/mzaf_6914517556113188877.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a6/85/b9/a685b9f8-dad3-2ed7-58b2-ab7f64304505/23UMGIM58157.rgb.jpg/600x600bb.jpg"),
  s("midnights", 5, "You're on Your Own, Kid", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0a/21/b9/0a21b946-bb54-7998-778e-54e6356d0597/mzaf_4277326021371801292.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 6, "Midnight Rain", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ce/88/a0/ce88a0e5-d0d3-b40d-6160-c744f875debc/mzaf_1047650093115956543.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 7, "Question...?", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/61/2c/65/612c651d-7ce4-73ce-4485-6a664337b8bc/mzaf_18124086278071234453.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 8, "Vigilante Shit", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/66/bb/30/66bb309c-8ac5-9760-811e-e221ec54007d/mzaf_12264553435593434857.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 9, "Bejeweled", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/18/c4/9e/18c49eec-4235-6a26-cd05-a7fb5c75f348/mzaf_8875722496959849005.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 10, "Labyrinth", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/39/5e/81/395e81d4-5453-b54a-e03f-3b011c557425/mzaf_9190727904046492064.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 11, "Karma", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/cb/b5/21/cbb52156-fbe0-fa68-5728-fcd1cb0832cc/mzaf_11353075206298436565.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 12, "Sweet Nothing", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ef/26/b4/ef26b442-97ec-fbd6-47b6-57cf9a69cb46/mzaf_17846229649851732141.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 13, "Mastermind", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b8/cc/04/b8cc0419-3732-c0d3-3785-b1070fa9b407/mzaf_13377886732785953455.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  // 3am Edition
  s("midnights", 14, "The Great War", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3f/b9/e8/3fb9e804-47b5-36d3-50f6-890ddf8037a9/mzaf_3664409207935924766.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 15, "Bigger Than the Whole Sky", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f1/77/c6/f177c695-23c3-77a9-0f2b-c134a13e6969/mzaf_1233386247515667249.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 16, "Paris", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/22/92/f1/2292f1a4-77fd-5a0a-c7ee-5dad9cbc6a7c/mzaf_17580100385995461427.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 17, "High Infidelity", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a2/40/ec/a240eca8-8044-83db-6dd6-cbc5d757acc1/mzaf_3769861694205568270.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 18, "Glitch", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/44/ef/77/44ef7743-d8af-1446-1e28-3de3c3bf7cc3/mzaf_14221140103076584939.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 19, "Would've, Could've, Should've", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/c5/a3/34c5a3e5-2b1a-0a72-47d6-40c90a602ba6/mzaf_11172315631356892515.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  s("midnights", 20, "Dear Reader", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/10/7e/a7/107ea7c3-7622-bd15-e73e-b93ebc1402a6/mzaf_1469301670702005438.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/59/13/5c/59135ccc-8425-415c-7f89-8aeada60088e/22UM1IM22440.rgb.jpg/600x600bb.jpg"),
  // Til Dawn Edition
  s("midnights", 21, "Hits Different", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4a/f0/b1/4af0b1c3-cf56-5a02-4d74-abc92b9d60b4/mzaf_18367139820263273019.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a6/85/b9/a685b9f8-dad3-2ed7-58b2-ab7f64304505/23UMGIM58157.rgb.jpg/600x600bb.jpg"),

  // ── The Tortured Poets Department (2024) ──
  s("tortured-poets", 1, "Fortnight", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6a/d8/d1/6ad8d1f0-a747-d646-20d1-8c8dfb0bce3a/mzaf_190295342267799968.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 2, "The Tortured Poets Department", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6b/91/b7/6b91b75b-b488-c738-e7ff-161a3f9831ba/mzaf_9617273610322731784.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/8a/8d/a38a8de5-ae11-154c-dca5-221e6549caee/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 3, "My Boy Only Breaks His Favorite Toys", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/83/66/62/83666247-77b5-7ae6-b779-93f732dd24a7/mzaf_13668445448661474469.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 4, "Down Bad", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/63/db/30/63db3028-aaed-796e-f3cb-54ca8b3da8f3/mzaf_17973611795415547501.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 5, "So Long, London", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9e/69/df/9e69df5e-6e82-a5e1-d9b1-5a68e4cfd40d/mzaf_3074834546400386292.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 6, "But Daddy I Love Him", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/40/93/6a/40936abd-dbf0-eed9-91b7-c000f194e110/mzaf_1316526371506813583.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 7, "Fresh Out the Slammer", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2c/e0/0c/2ce00c52-c353-8896-af57-78f02067ed15/mzaf_14128580188948363328.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 8, "Florida!!!", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/34/31/04/3431042c-c8d9-9d6e-dbb1-ee6d2fddd3c4/mzaf_14677322361125402387.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 9, "Guilty as Sin?", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b5/9d/71/b59d7150-2e68-ba23-0a26-59b1ccf20ea0/mzaf_6927614557567804503.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 10, "Who's Afraid of Little Old Me?", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/46/a4/82/46a48291-c208-457b-c885-e4000719c9b8/mzaf_4851545599882762251.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 11, "I Can Fix Him (No Really I Can)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c4/c9/1e/c4c91ec2-5238-0a52-c8e8-47d43e133034/mzaf_518237952662149239.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 12, "loml", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b5/d0/e6/b5d0e6df-7280-7392-9203-7cbbb108b22e/mzaf_5532732726143458150.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/8a/8d/a38a8de5-ae11-154c-dca5-221e6549caee/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 13, "I Can Do It with a Broken Heart", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0d/db/95/0ddb9503-0feb-b305-faec-18d35e94e091/mzaf_4371743076557902119.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 14, "The Smallest Man Who Ever Lived", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b2/ac/a3/b2aca34f-0a24-f6e8-7b61-703736e96dfe/mzaf_15398664685790409130.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/8a/8d/a38a8de5-ae11-154c-dca5-221e6549caee/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 15, "The Alchemy", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/90/22/bc/9022bccb-36e7-0cba-d3ce-02a7e0cce6c3/mzaf_4100828029894814824.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 16, "Clara Bow", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/49/09/b2/4909b276-08e4-24c0-5a2c-5bdc02c2b3c8/mzaf_13406354175006869695.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  // The Anthology
  s("tortured-poets", 17, "The Black Dog", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ed/0e/73/ed0e73df-8ac0-cc4d-c683-62989356fabe/mzaf_5570843588806201632.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/8a/8d/a38a8de5-ae11-154c-dca5-221e6549caee/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 18, "imgonnagetyouback", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cb/88/ae/cb88ae68-faff-faa6-cb0b-ecea5e40953a/mzaf_16719184490493688940.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 19, "The Albatross", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/43/8f/82/438f824d-3c9a-7ebc-e7bf-e53ab3bcc818/mzaf_5330315903990790560.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 20, "Chloe or Sam or Sophia or Marcus", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/66/06/1e/66061ea9-4263-d35e-0c8b-831bfc446d30/mzaf_18245527812562616178.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 21, "How Did It End?", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/aa/3a/16/aa3a1610-43f9-b46c-374c-fae91ec97ae0/mzaf_16602322086142286722.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 22, "So High School", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a9/e6/52/a9e65213-adce-eb0e-6d14-bf3af1da455d/mzaf_2274513825472775344.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 23, "I Hate It Here", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/eb/72/67/eb72672c-3106-268f-c4f0-dd277294257f/mzaf_2194434722267519287.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 24, "thanK you aIMee", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/25/c0/f2/25c0f281-a24a-5c1b-cfdb-aea8e49f6e5b/mzaf_1180713543184547233.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 25, "I Look in People's Windows", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/61/03/e9/6103e980-2c9a-fcda-113c-09aed46784a3/mzaf_6635811604253653175.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 26, "The Prophecy", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9a/25/92/9a259273-0b8e-aea5-b0e1-2af573a244b0/mzaf_11683993049793695972.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 27, "Cassandra", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d7/cd/a7/d7cda7a0-711f-9f2f-510b-dbe233b6af3c/mzaf_11467637402588613976.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/8a/8d/a38a8de5-ae11-154c-dca5-221e6549caee/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 28, "Peter", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/95/0d/5f/950d5fc4-1b36-587d-18d8-9d0321f03c50/mzaf_6013794920239683432.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 29, "The Bolter", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/bc/ba/00/bcba00eb-e75e-e3b9-b153-3f94637379b5/mzaf_9122956212315871378.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/8a/8d/a38a8de5-ae11-154c-dca5-221e6549caee/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 30, "Robin", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/71/71/9c/71719c3b-be3c-9ad7-f844-2f4bee398ab1/mzaf_3420868936008442283.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),
  s("tortured-poets", 31, "The Manuscript", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/26/7e/78/267e7889-5518-0e51-487b-f6f51f5705f6/mzaf_3139436457397119762.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a4/86/59/a486593a-53c9-1c2a-5122-8f25339f7359/24UMGIM44778.rgb.jpg/600x600bb.jpg"),

  // ── The Life of a Showgirl (2025) ──
  s("showgirl", 1, "The Fate of Ophelia", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bb/e3/c8/bbe3c8a3-0b06-20f4-6211-c53de0d2c4ef/mzaf_12435828701815921526.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/8f/a9/588fa9a2-7cc5-f02c-9ce6-c986e0dc1c15/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 2, "Elizabeth Taylor", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/df/b9/2f/dfb92fe9-d565-8ce4-185d-d81bad103036/mzaf_14954681436998684096.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2d/46/e0/2d46e0bc-8ab9-85dd-4b56-ee6951351034/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 3, "Opalite", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f2/05/dd/f205dd86-131f-39f1-2e48-6a16d1099618/mzaf_2963212195811157220.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/8f/a9/588fa9a2-7cc5-f02c-9ce6-c986e0dc1c15/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 4, "Father Figure", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1f/fb/a4/1ffba433-d107-e749-4e16-353826deed19/mzaf_9324179599996746785.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 5, "Eldest Daughter", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bf/f5/95/bff5953f-f69e-d04e-afbe-ba96f1c57588/mzaf_18009127957129187623.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 6, "Ruin The Friendship", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0d/6f/01/0d6f013f-4a9e-5ccf-831f-f55cb2e0bb36/mzaf_2505753943205076935.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2d/46/e0/2d46e0bc-8ab9-85dd-4b56-ee6951351034/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 7, "Actually Romantic", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1c/39/2e/1c392eb8-041b-b502-c8e3-9e29ee34bbec/mzaf_6724997105743602696.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 8, "Wi$h Li$t", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/df/39/70/df397041-1c87-30c1-c47e-e9fb7dae1752/mzaf_17927782945757814221.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 9, "Wood", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a4/90/f2/a490f292-4ab8-6bfe-0bde-76312c12fffb/mzaf_9753477967805686596.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 10, "CANCELLED!", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/07/73/98/0773986e-8ad4-668a-f5be-7acc0a5850d3/mzaf_13374898045083136754.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 11, "Honey", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4a/f1/96/4af196ad-c6c1-d3c7-b885-0f2abbd0df70/mzaf_82820050793814487.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 12, "The Life of a Showgirl (feat. Sabrina Carpenter)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/57/8a/c1/578ac195-93de-925e-08d8-c480a9dbcbc2/mzaf_1696935534997204364.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/0c/5a/300c5a57-d3be-a170-f880-f63380ca6312/25UM1IM19577.rgb.jpg/600x600bb.jpg"),
  // Acoustic Collection
  s("showgirl", 14, "Elizabeth Taylor (So Glamorous Cabaret Version)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1d/0c/82/1d0c825e-76c7-687e-38a8-9101004dc42d/mzaf_16879927861302808212.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0e/e5/c7/0ee5c717-114f-f4e8-9f7c-e92dd6eb9152/25UM1IM74420.rgb.jpg/600x600bb.jpg"),
  s("showgirl", 17, "Ruin The Friendship (My Advice Version)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f6/75/13/f67513b5-854a-cc39-da8e-f9122663ea56/mzaf_13098400393727047108.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0e/e5/c7/0ee5c717-114f-f4e8-9f7c-e92dd6eb9152/25UM1IM74420.rgb.jpg/600x600bb.jpg"),

  // ── The Taylor Swift Holiday Collection (2007) ──
  s("holiday", 1, "Last Christmas", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/48/5d/6b/485d6b1b-528d-a12d-f027-54986472a7d6/mzaf_6140094659428734461.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a3/54/a4/a354a415-726e-abdc-6b85-b3b3816a1dc2/08PNDIM05593.rgb.jpg/600x600bb.jpg"),
  s("holiday", 2, "Christmases When You Were Mine", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/89/c9/7f/89c97fc3-4c8c-26ee-6744-298ac2482589/mzaf_4818095898769923749.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c6/01/8b/c6018b3e-ae83-e5ed-9003-5ddb70f4d237/18OPBMR00132.rgb.jpg/600x600bb.jpg"),
  s("holiday", 3, "Santa Baby", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d9/be/ff/d9beffc7-06e5-bb76-745f-b83c3f282e78/mzaf_8679343580632121400.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c6/01/8b/c6018b3e-ae83-e5ed-9003-5ddb70f4d237/18OPBMR00132.rgb.jpg/600x600bb.jpg"),
  s("holiday", 4, "Silent Night", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f8/36/39/f83639ee-d404-b2d7-0b66-add2e2ad7480/mzaf_915334495186843568.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c6/01/8b/c6018b3e-ae83-e5ed-9003-5ddb70f4d237/18OPBMR00132.rgb.jpg/600x600bb.jpg"),
  s("holiday", 5, "Christmas Must Be Something More", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/13/1f/09/131f0946-986b-31e3-f170-63f017099a94/mzaf_13736718147153944737.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c6/01/8b/c6018b3e-ae83-e5ed-9003-5ddb70f4d237/18OPBMR00132.rgb.jpg/600x600bb.jpg"),
  s("holiday", 6, "White Christmas", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ab/e5/49/abe5499b-097b-6992-939e-93b516a6345f/mzaf_14094903622210300686.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/c6/01/8b/c6018b3e-ae83-e5ed-9003-5ddb70f4d237/18OPBMR00132.rgb.jpg/600x600bb.jpg"),

  // ── Singles ──
  s("singles", 1, "Today Was a Fairytale", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0d/9f/cf/0d9fcf1b-906d-715e-092c-2e3c1cf6011d/mzaf_4549320682127733381.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/51/98/fa/5198fa72-4ee3-ac6f-4af0-a7adb44462cb/00843930037759.rgb.jpg/600x600bb.jpg"),
  s("singles", 2, "Christmas Tree Farm", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b8/8e/9a/b88e9a9f-f155-cfc7-619a-fc76d13bbb9d/mzaf_3447832727128002030.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ca/55/5a/ca555a0e-c360-26e6-437d-098b0089482a/19UM1IM09492.rgb.jpg/600x600bb.jpg"),
  s("singles", 4, "Carolina", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1b/0b/82/1b0b822b-bfb7-6fc9-8459-d5b6742ed1c4/mzaf_9518492265856175597.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/51/5f/41/515f417f-19d6-ea22-e1fb-acebc2ba4f23/22UMGIM67563.rgb.jpg/600x600bb.jpg"),
  s("singles", 5, "All Of The Girls You Loved Before", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2f/7d/fb/2f7dfb02-0841-6676-732d-e58c33aa0806/mzaf_700225932490961796.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/22/1b/74/221b7454-3eb1-1117-66fd-d3b18ffc573a/19UMGIM53909.rgb.jpg/600x600bb.jpg"),
  s("singles", 6, "Safe & Sound (Taylor's Version)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/40/ba/1e/40ba1e9a-953f-d15f-6268-c915c458172d/mzaf_4830941743341086953.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/71/68/56/71685693-ccea-7640-209b-94a0f974c697/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("singles", 7, "If This Was A Movie (Taylor's Version)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/18/fc/29/18fc29fc-5cbf-ad5d-17d3-239b729fb37a/mzaf_12302529556273679478.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b4/7a/aa/b47aaad3-7764-1d69-1f18-5bc66fe0c946/21UMGIM09915.rgb.jpg/600x600bb.jpg"),
  s("singles", 8, "Eyes Open (Taylor's Version)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4f/8a/64/4f8a64e3-57e1-04d1-1a0b-e72a6d3691b7/mzaf_1350413172383327894.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a3/ff/55/a3ff5538-2fd3-d267-b7c8-12e4b70a2561/21UM1IM25046.rgb.jpg/600x600bb.jpg"),
  s("singles", 9, "You're Losing Me (From The Vault)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c7/47/f5/c747f545-340f-0be2-89d8-a61e0d233b84/mzaf_6134489467364277275.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d8/a2/e6/d8a2e6ad-e7e3-b28c-38b4-e699bb2921ae/23UM1IM57610.rgb.jpg/600x600bb.jpg"),
  s("singles", 10, "Sweeter Than Fiction", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c0/89/e7/c089e70a-5b32-9898-5231-7808063d4420/mzaf_8263979227291743037.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/85/5a/6e/855a6e0e-1326-a3ad-e690-022fa4045128/00843930010936.rgb.jpg/600x600bb.jpg"),

  s("singles", 11, "I Don't Wanna Live Forever", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/14/20/94142074-e264-15cb-77ea-a0821d86c5ca/mzaf_5791146158719480684.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e5/9b/1e/e59b1eaa-92d3-df4b-73f2-9bd798feb630/17UMGIM01263.rgb.jpg/600x600bb.jpg"),
  s("singles", 12, "Crazier", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8e/2d/c3/8e2dc32b-59a0-3779-4165-bdc80a79c1ff/mzaf_10837071103067309529.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/23/42/0a/23420a7b-6fe0-9a8b-a740-c8e1ff6db2a7/09PNDIM00900.rgb.jpg/600x600bb.jpg"),
  s("singles", 13, "us. (feat. Taylor Swift)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a8/e1/1e/a8e11ece-316d-8a63-1057-67846d9e39d4/mzaf_11221775671270559732.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d2/f8/99/d2f89987-d2a5-45a5-1746-c0841c7e9843/24UM1IM17286.rgb.jpg/600x600bb.jpg"),
  s("singles", 14, "The Alcott (feat. Taylor Swift)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ca/d3/16/cad31628-7183-5de9-ba54-39b8d4bd2844/mzaf_6982750700103446847.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f7/47/ec/f747ecf4-6520-e39b-7f58-b56b8e5446e0/191400056671.png/600x600bb.jpg"),
  s("singles", 15, "Gasoline (Remix)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e8/82/a1/e882a190-c6dd-9678-48e6-baa361ec42d3/mzaf_1664329026182313863.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/54/a9/00/54a90091-68b2-aba3-db6d-5c387e3ef301/886448983798.jpg/600x600bb.jpg"),
  s("singles", 16, "The Joker And The Queen (feat. Taylor Swift)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/e3/ee/96/e3ee968a-79fd-4916-9015-732ae38bd97a/mzaf_165648083506534632.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7b/36/ec/7b36ec5a-d752-167b-849f-2e6f8bdf90d5/190296267987.jpg/600x600bb.jpg"),
  s("singles", 17, "Renegade (feat. Taylor Swift)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f0/6c/9d/f06c9d95-575a-f222-8288-335db54546f1/mzaf_16009602758937342095.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/62/c1/45/62c14562-2f30-c80b-1619-d4db6feee2d1/25822.jpg/600x600bb.jpg"),
  s("singles", 18, "Birch (feat. Taylor Swift)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/05/6b/15/056b1546-e365-ffa0-4dd3-0492fe106324/mzaf_2782076030504229678.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/03/01/6a/03016ab8-f732-ca90-b8c6-9d0bfc9b95c6/18094.jpg/600x600bb.jpg"),
  s("singles", 19, "Highway Don't Care (feat. Taylor Swift & Keith Urban)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/bb/5c/53/bb5c53b9-1956-dee3-d4e8-6651a471ca85/mzaf_9378522788391468192.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f2/90/d9/f290d9ec-a409-5b26-a491-a3d45913daf0/13UMDIM00081.rgb.jpg/600x600bb.jpg"),
  s("singles", 20, "Two Is Better Than One (feat. Taylor Swift)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/22/d3/02/22d3026e-aff4-323b-58d2-b22f68e703d5/mzaf_14981042874267165740.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c9/ee/12/c9ee12e7-8215-5d51-ce01-7be14e1a7e81/mzi.hhgorzwt.jpg/600x600bb.jpg"),
  s("singles", 21, "Both of Us (feat. Taylor Swift)", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/84/d6/51/84d6513e-b71d-dfff-61e3-3017d2f6079c/mzaf_5470813680703735952.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/b6/c3/4c/b6c34cf8-9df7-a953-00d4-4ab17a2df7e8/075679963222.jpg/600x600bb.jpg"),
  s("singles", 22, "Beautiful Ghosts", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/75/70/9e/75709e87-db80-e46b-535f-2724b55691c8/mzaf_11511869076555740546.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/90/75/28/9075283d-1032-c91b-8a98-5c2e242cc412/19UM1IM07976.rgb.jpg/600x600bb.jpg"),
  s("singles", 23, "Only The Young", "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5b/02/57/5b0257b9-436b-5923-5b7e-97a594eb43db/mzaf_1912032089207179564.plus.aac.p.m4a", "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b7/e6/8a/b7e68a1a-6beb-6187-3cdc-ecd3dbf0257e/20UMGIM04837.rgb.jpg/600x600bb.jpg"),
];

const albumArtworkCache = new Map<AlbumId, string | undefined>();

export function getAlbumArtwork(albumId: AlbumId): string | undefined {
  if (albumArtworkCache.has(albumId)) return albumArtworkCache.get(albumId);
  const artwork = SONGS.find((s) => s.albumId === albumId)?.artworkUrl;
  albumArtworkCache.set(albumId, artwork);
  return artwork;
}
