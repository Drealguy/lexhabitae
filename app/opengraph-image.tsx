import { ImageResponse } from "next/og";

// Preview image shown when a page link is shared (WhatsApp, LinkedIn, X, etc.).
export const alt = "Lex Habitae Solicitors, Abuja";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#07101F",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
          Lex Habitae Solicitors
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            Legal Clarity That Moves Business Forward.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#6B96F5" }}>
            Corporate, Regulatory &amp; Commercial Advisory · Abuja, Nigeria
          </div>
        </div>
      </div>
    ),
    size,
  );
}
