import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Satisfy,
  Oswald,
  Dancing_Script,
  Bebas_Neue,
  Permanent_Marker,
  UnifrakturMaguntia,
  Mrs_Saint_Delafield,
  IM_Fell_DW_Pica,
  Inter,
  Libre_Caslon_Display,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-era-taylor-swift",
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-era-fearless",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-era-speak-now",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-era-red",
  weight: "400",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-era-1989",
  weight: "400",
  subsets: ["latin"],
});

const unifraktur = UnifrakturMaguntia({
  variable: "--font-era-reputation",
  weight: "400",
  subsets: ["latin"],
});

const mrsSaintDelafield = Mrs_Saint_Delafield({
  variable: "--font-era-lover",
  weight: "400",
  subsets: ["latin"],
});

const imFellDWPica = IM_Fell_DW_Pica({
  variable: "--font-era-folklore",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-era-midnights",
  subsets: ["latin"],
});

const libreCaslon = Libre_Caslon_Display({
  variable: "--font-era-tortured-poets",
  weight: "400",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-era-showgirl",
  subsets: ["latin"],
});

const eraFontVars = [
  satisfy.variable,
  oswald.variable,
  dancingScript.variable,
  bebasNeue.variable,
  permanentMarker.variable,
  unifraktur.variable,
  mrsSaintDelafield.variable,
  imFellDWPica.variable,
  inter.variable,
  libreCaslon.variable,
  playfairDisplay.variable,
].join(" ");

export const metadata: Metadata = {
  title: "Taylor Swift Ranked",
  description: "Rank every Taylor Swift song. Your #1 sets the vibe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eraFontVars} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
