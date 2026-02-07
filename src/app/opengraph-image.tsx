import { ImageResponse } from "next/og";

export const alt = "CheoTech Studio — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#fafafa",
            letterSpacing: "-0.02em",
          }}
        >
          CheoTech Studio
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          Websites · Mobile Apps · Extensions · Games
        </div>
      </div>
    ),
    { ...size }
  );
}
