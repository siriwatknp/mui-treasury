export function registerVerify(program) {
  program
    .command('verify [component]')
    .description('Render a component under your theme in a variant and state, and check what it really computes (e.g. `verify Button --props variant=outlined --state :hover --expect root.borderColor=#3E63DD`)')
    .option('--props <k=v,…...>', 'a variant to render (e.g. size=small,variant=outlined); repeat for more cases')
    .option('--state <list...>', 'a state set to put it in, comma list: disabled, checked, selected, expanded, error, :hover, :active, focusVisible, focused; repeat for more cases')
    .option('--width <px,…>', 'viewport widths to check, comma list (e.g. 390,1280) — each is a case')
    .option('--pointer <fine|coarse,…>', 'pointer types to check: fine (mouse) and/or coarse (touch: (pointer: coarse), (hover: none)) — each is a case')
    .option('--touch', 'same as --pointer coarse')
    .option('--slot <name>', 'only report this slot (default: every slot that renders)')
    .option('--values', 'print every computed value of each slot (default: each slot\'s box; check values with --expect)')
    .option('--expect <slot.prop=value...>', 'an expected value checked in every case, e.g. root.paddingTop=10px, or root.box.height=36px for the laid-out box; repeatable — exit 1 when one fails')
    .option('--theme <file>', 'your theme module (default-exports createTheme options); omit for vanilla Material UI')
    .option('--font <source...>', 'the font a custom family of the theme renders with: an installed package (@fontsource/inter) or "Family=file" (.woff2/.ttf); repeatable')
    .option('--skip-font', 'render a custom theme font with its fallback fonts instead of failing')
    .option('--all', 'the gate: every variant, state and docs composition of the component and its family, checked for a 24×24 touch target, dead zones and a focus ring nothing cuts off — exit 1 on any failure. Without a component: every component the --theme touches')
    .option('--shot <file>', 'with --all: the contact sheet of every case (default verify-<Component>.png)')
    .action((...args) => import('./verify.run.mjs').then((m) => m.run(program, ...args)));
}
