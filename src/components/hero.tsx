import { SITE } from "@/lib/site";
import { TextFlip } from "./text-flip";

const ROLES = ["full-stack engineer", "ai engineer", "product engineer"];

export function Hero() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-5xl tracking-tight">{SITE.name}</h1>
        <p className="h-6 text-muted-foreground">
          <TextFlip items={ROLES} />
        </p>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        computer science student from ukraine. i build web apps and ai-powered
        tools, and i&apos;m working toward a career in machine learning.
      </p>
      <a
        href={SITE.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-sm underline underline-offset-4 decoration-border transition-colors hover:decoration-foreground"
      >
        github ↗
      </a>
    </section>
  );
}
