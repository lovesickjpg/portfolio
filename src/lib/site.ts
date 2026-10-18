import { env } from "@/env";

export const SITE = {
  name: "daniel",
  title: "daniel",
  description:
    "Full-stack and AI engineer from Ukraine. Projects, experience and contact.",
  url: env.NEXT_PUBLIC_SITE_URL,
  github: "https://github.com/lovesickjpg",
} as const;
