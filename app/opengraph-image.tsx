import { ImageResponse } from "next/og";

export const alt = "ASII — Financial Crime Intelligence Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#05070b",
        color: "#f5f7ff",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "58px 64px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
          <div
            style={{
              color: "#f5f7ff",
              display: "flex",
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            ASII
          </div>
          <div
            style={{
              borderLeft: "1px solid #24344e",
              color: "#88dfff",
              display: "flex",
              fontSize: 20,
              paddingLeft: 18,
            }}
          >
            Intelligence Infrastructure
          </div>
        </div>
        <div
          style={{
            border: "1px solid #24344e",
            borderRadius: "999px",
            color: "#a8b5cf",
            display: "flex",
            fontSize: 20,
            padding: "10px 18px",
          }}
        >
          UAE · Saudi Arabia · GCC · MENA
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div
          style={{
            color: "#67e8f9",
            display: "flex",
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          AI-native intelligence infrastructure
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 58,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
            marginTop: 24,
          }}
        >
          Preserve investigative context across every financial crime handoff.
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #17263d",
          color: "#a8b5cf",
          display: "flex",
          fontSize: 22,
          paddingTop: 24,
        }}
      >
        Signals → Contextual Intelligence → Investigation Continuity →
        Regulator-Ready Output
      </div>
    </div>,
    size,
  );
}
