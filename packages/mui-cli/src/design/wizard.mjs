/**
 * @file The DESIGN.md authoring contract that `mui wizard` prints. The agent
 * runs `mui wizard` first to learn what a DESIGN.md needs and which user
 * decision fills which field, then runs the interview from `rounds`. The schema
 * mirrors what `mui compile-theme` reads; the agent never invents fields or numbers.
 */

/** DESIGN.md front-matter fields the compiler reads (see compile-theme). */
export const schema = [
  { field: 'colors', required: true, type: 'map<dash-path, hex>', mapsTo: 'palette (un-flattened)', note: 'only primary-main is required; createTheme derives light/dark/contrastText' },
  { field: 'typography', required: false, type: 'map<variant, {fontFamily,fontSize,fontWeight,lineHeight,letterSpacing}>', mapsTo: 'typography', note: 'omit to keep the app type ramp; set fontFamily to rebrand type' },
  { field: 'typography.fontSize', required: false, type: 'rem|px', mapsTo: 'typography.fontSize (base text size)', note: 'picks the type ramp — 0.875rem dense data apps · 1rem default · 1.0625rem spacious' },
  { field: 'rounded', required: false, type: 'map<step, px>', mapsTo: 'shape.borderRadius (= step "1")', note: 'default 4px' },
  { field: 'spacing', required: false, type: 'map<step, px>', mapsTo: 'theme.spacing (= step "1")', note: 'default 8px' },
  { field: 'shadows', required: false, type: 'map<name, css box-shadow>', mapsTo: 'named shadows the cascade refers to', note: 'for multi-layer / inset shadows' },
  { field: 'components.<Mui…>.cascade', required: false, type: '[slot] → variant → state → {background,foreground,border,outline,shadow,transform}', mapsTo: 'styleOverrides per variant × state', note: 'colors by token name; alpha as a percent (`ink 20%`)' },
  { field: '<name>-dark.md', required: false, type: 'sibling file with its own colors', mapsTo: 'colorSchemes.dark', note: 'everything but colors is shared with the light file' },
];

/** User decision → the field(s) it fills, and how. Agent judgment stays here (choices), never the numbers. */
export const decisions = [
  { decision: 'brand primary color', fills: 'colors.primary-main', how: 'hex; MUI derives light/dark/contrastText' },
  { decision: 'accent / secondary', fills: 'colors.secondary-main + secondary-contrastText', how: 'OPTIONAL — omit unless asked. If wanted, keep it NEUTRAL: subtle grey main + #121212 contrastText (inverted for dark), not a second brand hue' },
  { decision: 'neutral tone', fills: 'colors.text-primary/-secondary, background-default/-paper, divider', how: 'hex set — cool/warm/pure greys' },
  { decision: 'status colors', fills: 'colors.{error,warning,info,success}-main', how: 'optional; MUI defaults if omitted' },
  { decision: 'typeface', fills: 'typography.fontFamily (+ typography.headingFontFamily for a display font)', how: 'AGENT DECIDES from vibe/domain — see FONTS below; body font + optional heading display font' },
  { decision: 'corner style', fills: 'rounded."1" → shape.borderRadius', how: 'sharp 0 · subtle 4 · soft 8 · round 12' },
  { decision: 'text size', fills: 'typography.fontSize', how: 'dense 0.875rem · default 1rem · spacious 1.0625rem' },
];

/**
 * Vibe (round-1 answer) → recommended defaults for the shape/type/palette
 * questions. When the user picks a vibe, these OVERRIDE the flat `*` fallbacks;
 * skip the vibe and the fallbacks apply. Agent recommends these; user still picks.
 */
export const vibeDefaults = {
  minimalistic: { corners: 8, baseFont: '1rem', palette: 'restrained — one accent, cool neutrals' },
  bold: { corners: 0, baseFont: '1rem', palette: 'saturated primary, high contrast' },
  playful: { corners: 12, baseFont: '1rem', palette: 'bright, warm neutrals' },
  corporate: { corners: 4, baseFont: '0.875rem', palette: 'conservative, blue-leaning; dense text' },
};

/** Defaults compile-theme ALWAYS applies (not asked — baked into every compiled theme). */
export const alwaysApplied = ['typography.button.textTransform = initial (no MUI uppercase)', 'integer px line-heights on every typography variant'];

/**
 * Font guidance — the agent DECIDES the typeface from vibe/domain (it's a design
 * call, like colour). Body font → typography.fontFamily; an optional display font
 * on headings → typography.headingFontFamily (compile applies it to h1–h6).
 */
export const fonts = {
  byVibe: { minimalistic: 'Inter', corporate: 'Inter (or IBM Plex Sans)', playful: 'Nunito (rounded)', bold: 'Space Grotesk' },
  display: 'optional serif/display on headings for editorial / premium / calm-financial looks (Newsreader · Source Serif 4 · Fraunces) → typography.headingFontFamily',
  data: 'data-heavy UIs: prefer fonts with good tabular figures (Inter, IBM Plex Sans)',
  rule: 'name a font: a bare sans name auto-gets system-sans fallbacks; for a SERIF display font give a full stack ending in `serif`. Loading the webfont is the APP’s job — the theme only names it.',
};

/**
 * Ordered interview, grouped into rounds. Each question carries options, a
 * recommended default (starred), the field it fills, and a note. The agent asks
 * these — it does NOT invent questions.
 */
export const rounds = [
  {
    round: 1,
    title: 'Aesthetic & domain',
    questions: [
      { id: 'vibe', ask: 'What should the product feel like?', options: ['minimalistic *', 'bold', 'playful', 'corporate'], fills: '(guides defaults, not a token)', note: 'sets the recommendation lean for shape/type/color' },
      { id: 'reference', ask: 'Any reference apps or products to echo?', options: ['name up to 3', 'skip *'], fills: '(guides defaults)', note: 'informs palette/type/roundness recommendations' },
    ],
  },
  {
    round: 2,
    title: 'Brand',
    questions: [
      { id: 'primary', ask: 'Brand primary color?', options: ['a hex', 'pick for me *'], fills: 'colors.primary-main', note: '"pick for me" → choose from the vibe' },
      { id: 'secondary', ask: 'A secondary / accent color?', options: ['none *', 'subtle grey (neutral)', 'a brand hex'], fills: 'colors.secondary-main', note: 'omit unless asked; if wanted, recommend a subtle grey (main + #121212 contrastText, inverted for dark) over a second brand hue' },
      { id: 'typeface', ask: 'Typeface? (agent proposes from the vibe — see FONTS)', options: ['pick for me (by vibe) *', 'a named font', 'a brand font stack'], fills: 'typography.fontFamily (+ headingFontFamily)', note: 'also decide if headings want a display font (serif for editorial/premium)' },
    ],
  },
  {
    round: 3,
    title: 'Shape & type',
    questions: [
      { id: 'corners', ask: 'Corner style?', options: ['sharp (0)', 'subtle (4) *', 'soft (8)', 'round (12)'], fills: 'rounded."1"', note: 'minimalistic ⇒ subtle/soft' },
      { id: 'baseFont', ask: 'Base text size?', options: ['dense — 0.875rem', 'default — 1rem *', 'spacious — 1.0625rem'], fills: 'typography.fontSize', note: 'dense data apps shrink text; spacious/iOS enlarge' },
    ],
  },
  {
    round: 4,
    title: 'Scope (optional)',
    questions: [
      { id: 'scheme', ask: 'Light, dark, or both?', options: ['light', 'dark', 'both — light & dark *'], fills: '<name>-dark.md', note: 'both → write the dark colors in a sibling <name>-dark.md' },
      { id: 'status', ask: 'Custom status colors, or MUI defaults?', options: ['MUI defaults *', 'custom hexes'], fills: 'colors.{error,warning,info,success}-main' },
      { id: 'states', ask: 'Any component whose colors per state must differ from the palette?', options: ['none *', 'name component + states'], fills: 'components.<Mui…>.cascade' },
    ],
  },
];

export const contract = { schema, decisions, vibeDefaults, fonts, alwaysApplied, rounds };
