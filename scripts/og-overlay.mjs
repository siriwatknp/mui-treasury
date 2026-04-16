import { Resvg } from "@resvg/resvg-js";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONTS_DIR = path.join(__dirname, "fonts");

export const WIDTH = 1200;
export const HEIGHT = 630;
const SCALE = 2;
const BAR_HEIGHT = 100;
const BAR_INSET = 16;
const BAR_BG =
  "linear-gradient(135deg, rgba(8, 8, 8, 0.65) 0%, rgba(120, 120, 120, 0.72) 50%, rgba(40, 40, 48, 0.55) 100%)";
const BAR_BORDER = "1px solid rgba(0,0,0,0.18)";
const BAR_SHADOW =
  "inset 0px 1px 0px rgba(255, 255, 255, 0.15), inset 0px -1px 0px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.18)";
const BADGE_BG =
  "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 100%)";
const BADGE_BORDER = "1px solid rgba(255,255,255,0.3)";
const BADGE_SHADOW = "0 4px 8px -2px rgba(0,0,0,0.15)";

let cachedFonts;
async function loadFonts() {
  if (cachedFonts) return cachedFonts;
  const [regular, semiBold, bold, mono] = await Promise.all([
    fs.readFile(path.join(FONTS_DIR, "Geist-Regular.ttf")),
    fs.readFile(path.join(FONTS_DIR, "Geist-SemiBold.ttf")),
    fs.readFile(path.join(FONTS_DIR, "Geist-Bold.ttf")),
    fs.readFile(path.join(FONTS_DIR, "GeistMono-Regular.ttf")),
  ]);
  cachedFonts = [
    { name: "Geist", data: regular, weight: 400, style: "normal" },
    { name: "Geist", data: semiBold, weight: 600, style: "normal" },
    { name: "Geist", data: bold, weight: 700, style: "normal" },
    { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
  ];
  return cachedFonts;
}

function chevronIcon(stroke) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

function el(type, props, ...children) {
  return { type, props: { ...props, children: children.flat() } };
}

export async function renderOg({ title, name, baseImage }) {
  const fonts = await loadFonts();
  const cmd = `npx mui-treasury add ${name}`;
  const baseUri = `data:image/png;base64,${Buffer.from(baseImage).toString("base64")}`;

  const tree = el(
    "div",
    {
      style: {
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
        position: "relative",
        display: "flex",
      },
    },
    el("img", {
      src: baseUri,
      width: WIDTH,
      height: HEIGHT,
      style: { position: "absolute", top: 0, left: 0 },
    }),
    el(
      "div",
      {
        style: {
          position: "absolute",
          left: `${BAR_INSET}px`,
          right: `${BAR_INSET}px`,
          bottom: `${BAR_INSET}px`,
          height: `${BAR_HEIGHT}px`,
          borderRadius: "16px",
          border: BAR_BORDER,
          boxShadow: BAR_SHADOW,
          overflow: "hidden",
          display: "flex",
        },
      },
      el(
        "div",
        {
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            borderRadius: "15px",
            overflow: "hidden",
            display: "flex",
          },
        },
        el("img", {
          src: baseUri,
          width: WIDTH,
          height: HEIGHT,
          style: {
            position: "absolute",
            top: `${-(HEIGHT - BAR_HEIGHT - BAR_INSET + 1)}px`,
            left: `-${BAR_INSET + 1}px`,
            filter: "blur(8px)",
          },
        }),
      ),
      el("div", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: BAR_BG,
          display: "flex",
        },
      }),
      el(
        "div",
        {
          style: {
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "0 40px 0 24px",
          },
        },
        el(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            },
          },
          el(
            "div",
            {
              style: {
                display: "flex",
                fontSize: "28px",
                fontFamily: "Geist",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1,
                whiteSpace: "nowrap",
              },
            },
            title,
          ),
          el(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "8px",
              },
            },
            el("img", {
              src: chevronIcon("rgba(255,255,255,0.75)"),
              width: 22,
              height: 22,
            }),
            el(
              "div",
              {
                style: {
                  display: "flex",
                  fontSize: "18px",
                  fontFamily: "Geist Mono",
                  color: "rgba(255,255,255,0.75)",
                  whiteSpace: "nowrap",
                },
              },
              cmd,
            ),
          ),
        ),
        el(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              borderRadius: "12px",
              background: BADGE_BG,
              border: BADGE_BORDER,
              boxShadow: BADGE_SHADOW,
              color: "#ffffff",
              fontSize: "18px",
              fontFamily: "Geist",
              fontWeight: 600,
            },
          },
          "MUI Treasury",
        ),
      ),
    ),
  );

  const svg = await satori(tree, { width: WIDTH, height: HEIGHT, fonts });
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: WIDTH * SCALE },
  });
  return resvg.render().asPng();
}
