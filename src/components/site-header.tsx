import Link from "next/link";
import { SITE } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-xl items-center justify-between px-5 pt-6">
      <Link
        href="/"
        aria-label={SITE.name}
        className="font-heading text-2xl leading-none transition-opacity hover:opacity-60"
      >
        d.
      </Link>
      <ThemeToggle />
    </header>
  );
}
