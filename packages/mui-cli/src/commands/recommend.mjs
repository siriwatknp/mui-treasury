export function registerRecommend(program) {
  program
    .command('recommend [id]')
    .description("Modern theme options the theme doesn't use yet (CSS variables, color schemes, native color, focus ring, reduced motion…), each checked against the project's browser targets; design tokens still at MUI's defaults")
    .option('--theme <file>', 'your theme module (default-exports createTheme options or a created theme)')
    .option('--preset <name>', 'with a design-token id (typography, shadows): print that preset (tailwind), or measure it with --show')
    .option('--show', 'with an id: add its snippet to the theme and diff the result against the theme as it is — every component it changes')
    .option('--targets <browserslist>', "the browsers to check against (default: the project's browserslist config, Electron version or framework default)")
    .action((...args) => import('./recommend.run.mjs').then((m) => m.run(program, ...args)));
}
