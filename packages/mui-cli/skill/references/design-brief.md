# A theme from a design brief

```bash
mui wizard                                    # the DESIGN.md contract: fields, decision → field, interview questions
mui compile-theme DESIGN.md -o src/theme.ts   # DESIGN.md (colors, type, shape, spacing, per-state component colors) → createTheme options
mui showcase DESIGN.md                        # compiles on the fly; Button sizes, states and ✓/✗ every color against the DESIGN.md (--family Switch), exit 1 on a mismatch
mui showcase DESIGN.md --tokens               # same for palette / typography / radius / spacing
```

1. `mui wizard`, then interview the user round by round with its questions. The user decides; never invent fields or numbers.
2. Write `DESIGN.md` (dark colors go in a sibling `DESIGN-dark.md`), then `mui compile-theme DESIGN.md -o src/theme.ts`.
3. `mui showcase DESIGN.md` and `--tokens` until there is no ✗, then open both PNGs. `--theme <file>` checks a theme you wrote against the DESIGN.md.
4. Size changes (padding, gap): write them in the theme. `mui component <Component>` shows where MUI sets them.
5. Then the theming loop in SKILL.md: `verify` the asked values, pass `verify --all`, read `diff`.
