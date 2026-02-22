"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Songs" },
    { href: "/albums", label: "Albums" },
  ];

  return (
    <nav className="flex items-center justify-center gap-1 mt-4">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`
              text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200
              ${isActive ? "opacity-100" : "opacity-60 hover:opacity-90"}
            `}
            style={{
              color: "var(--theme-text-on-primary)",
              backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "transparent",
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
