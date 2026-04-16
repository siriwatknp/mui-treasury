/** @jsxRuntime automatic */
/** @jsxImportSource react */
import { Resvg } from "@resvg/resvg-js";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori, { type Font } from "satori";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONTS_DIR = path.join(__dirname, "fonts");

export const WIDTH = 1200;
export const HEIGHT = 630;

let cachedFonts: Font[];
async function loadFonts() {
  if (cachedFonts) return cachedFonts;
  const semiBold = await fs.readFile(
    path.join(FONTS_DIR, "GeistMono-SemiBold.ttf"),
  );
  cachedFonts = [
    { name: "Geist Mono", data: semiBold, weight: 600, style: "normal" },
  ];
  return cachedFonts;
}

function chevronIcon(stroke: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export async function renderOg({
  name,
  baseImage,
}: {
  name: string;
  baseImage: Buffer;
}) {
  const fonts = await loadFonts();
  const cmd = `npx mui-treasury add ${name}`;
  const baseUri = `data:image/png;base64,${Buffer.from(baseImage).toString("base64")}`;

  const tree = (
    <div
      style={{
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        position: "relative",
        display: "flex",
      }}
    >
      <img
        src={baseUri}
        width={WIDTH}
        height={HEIGHT}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <div
        style={{
          position: "absolute",
          right: "24px",
          bottom: "24px",
          padding: "8px 16px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow:
            "inset 0px 1px 0px rgba(255, 255, 255, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.18)",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          background: "rgba(0, 0, 0, 0.77)",
        }}
      >
        <img src={chevronIcon("#ffffff")} width={20} height={20} />
        <div
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: 600,
            fontFamily: "Geist Mono",
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          {cmd}
        </div>
      </div>
    </div>
  );

  const svg = await satori(tree, { width: WIDTH, height: HEIGHT, fonts });
  const resvg = new Resvg(svg);
  return resvg.render().asPng();
}
