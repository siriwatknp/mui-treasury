const GROUPS = {
  sizing: /^(width|height|minWidth|minHeight|maxWidth|maxHeight|flexBasis|aspectRatio|inlineSize|blockSize)$/,
  spacing: /^(padding|margin)(Top|Right|Bottom|Left|Block|Inline|BlockStart|BlockEnd|InlineStart|InlineEnd)?$|^(gap|rowGap|columnGap)$/,
  typography: /^(font\w*|lineHeight|letterSpacing|textTransform|textAlign|textDecoration\w*|textOverflow|whiteSpace|wordBreak|overflowWrap|hyphens|verticalAlign)$/,
  color: /^(color|backgroundColor|background|backgroundImage|fill|stroke|caretColor|opacity|accentColor)$/,
  border: /^(border\w*|outline\w*)$/,
  shadow: /^(boxShadow|textShadow|filter|backdropFilter)$/,
  motion: /^(transition\w*|transform\w*|animation\w*|willChange)$/,
};

export function categoryOf(prop) {
  if (prop.startsWith('--')) {
    return 'variable';
  }
  for (const [category, re] of Object.entries(GROUPS)) {
    if (re.test(prop)) {
      return category;
    }
  }
  return 'layout';
}
