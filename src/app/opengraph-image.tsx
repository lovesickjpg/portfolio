import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 96,
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <div style={{ fontSize: 112, fontWeight: 600, letterSpacing: -3 }}>
        {SITE.name}
      </div>
      <div style={{ fontSize: 40, color: "#a1a1aa", marginTop: 16 }}>
        full-stack & ai engineer
      </div>
      <div style={{ fontSize: 28, color: "#71717a", marginTop: 64 }}>
        lovesickjpg.me
      </div>
    </div>,
    size,
  );
}
