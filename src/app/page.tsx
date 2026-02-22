import { RankingList } from "@/components/RankingList";
import { NavLinks } from "@/components/NavLinks";

export default function Home() {
  return (
    <div className="min-h-dvh px-4 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight transition-[font-family] duration-500"
            style={{
              color: "var(--theme-text-on-primary)",
              fontFamily: "var(--theme-font-family), system-ui, sans-serif",
            }}
          >
            Taylor Swift Ranked
          </h1>
          <p
            className="mt-2 text-sm sm:text-base opacity-80"
            style={{ color: "var(--theme-text-on-primary)" }}
          >
            Expand an album, drag songs into your ranking. #1 sets the vibe.
          </p>
          <NavLinks />
        </header>

        <RankingList />
      </div>
    </div>
  );
}
