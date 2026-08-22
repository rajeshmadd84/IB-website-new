import { ImageResponse } from "next/og";

export const alt = "IntelliByld: Decision Intelligence for Construction Supply Chains";
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
          justifyContent: "center",
          padding: "80px",
          background: "#05070d",
          backgroundImage: "radial-gradient(circle at 78% 22%, rgba(0,224,255,0.22), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#00e0ff",
            marginBottom: "36px",
          }}
        >
          IntelliByld
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            color: "#f5f7fa",
            maxWidth: "920px",
          }}
        >
          Decision intelligence for construction supply chains
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: 28,
            color: "#9aa4b2",
            maxWidth: "820px",
          }}
        >
          Understand what changed, what it affects and what to do next across cost, schedule, risk and embodied carbon.
        </div>
      </div>
    ),
    { ...size }
  );
}
