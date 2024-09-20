const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
        "2xl": "1920px",
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--mui-palette-primary-mainChannel))",
          light: "rgb(var(--mui-palette-primary-lightChannel))",
          dark: "rgb(var(--mui-palette-primary-darkChannel))",
          contrastText: "rgb(var(--mui-palette-primary-contrastTextChannel))",
        },
        secondary: {
          DEFAULT: "rgb(var(--mui-palette-secondary-mainChannel))",
          light: "rgb(var(--mui-palette-secondary-lightChannel))",
          dark: "rgb(var(--mui-palette-secondary-darkChannel))",
          contrastText: "rgb(var(--mui-palette-secondary-contrastTextChannel))",
        },
        info: {
          DEFAULT: "rgb(var(--mui-palette-info-mainChannel))",
          light: "rgb(var(--mui-palette-info-lightChannel))",
          dark: "rgb(var(--mui-palette-info-darkChannel))",
          contrastText: "rgb(var(--mui-palette-info-contrastTextChannel))",
        },
        error: {
          DEFAULT: "rgb(var(--mui-palette-error-mainChannel))",
          light: "rgb(var(--mui-palette-error-lightChannel))",
          dark: "rgb(var(--mui-palette-error-darkChannel))",
          contrastText: "rgb(var(--mui-palette-error-contrastTextChannel))",
        },
        success: {
          DEFAULT: "rgb(var(--mui-palette-success-mainChannel))",
          light: "rgb(var(--mui-palette-success-lightChannel))",
          dark: "rgb(var(--mui-palette-success-darkChannel))",
          contrastText: "rgb(var(--mui-palette-success-contrastTextChannel))",
        },
        warning: {
          DEFAULT: "rgb(var(--mui-palette-warning-mainChannel))",
          light: "rgb(var(--mui-palette-warning-lightChannel))",
          dark: "rgb(var(--mui-palette-warning-darkChannel))",
          contrastText: "rgb(var(--mui-palette-warning-contrastTextChannel))",
        },
        text: {
          primary: "var(--mui-palette-text-primary)",
          secondary: "var(--mui-palette-text-secondary)",
          disabled: "var(--mui-palette-text-disabled)",
        },
        common: {
          background: "var(--mui-palette-common-background)",
          onBackground: "var(--mui-palette-common-onBackground)",
        },
        gray: {
          50: "var(--mui-palette-grey-50)",
          100: "var(--mui-palette-grey-100)",
          200: "var(--mui-palette-grey-200)",
          300: "var(--mui-palette-grey-300)",
          400: "var(--mui-palette-grey-400)",
          500: "var(--mui-palette-grey-500)",
          600: "var(--mui-palette-grey-600)",
          700: "var(--mui-palette-grey-700)",
          800: "var(--mui-palette-grey-800)",
          900: "var(--mui-palette-grey-900)",
          A100: "var(--mui-palette-grey-A100)",
          A200: "var(--mui-palette-grey-A200)",
          A400: "var(--mui-palette-grey-A400)",
          A700: "var(--mui-palette-grey-A700)",
        },
        divider: "var(--mui-palette-divider)",
        background: {
          default: "var(--mui-palette-background-default)",
          paper: "var(--mui-palette-background-paper)",
        },
        action: {
          active: "var(--mui-palette-action-active)",
          hover: "var(--mui-palette-action-hover)",
          selected: "var(--mui-palette-action-selected)",
          disabled: "var(--mui-palette-action-disabled)",
          focus: "var(--mui-palette-action-focus)",
        },
        Alert: {
          errorColor: "var(--mui-palette-Alert-errorColor)",
          infoColor: "var(--mui-palette-Alert-infoColor)",
          successColor: "var(--mui-palette-Alert-successColor)",
          warningColor: "var(--mui-palette-Alert-warningColor)",
          errorFilledBg: "var(--mui-palette-Alert-errorFilledBg)",
          infoFilledBg: "var(--mui-palette-Alert-infoFilledBg)",
          successFilledBg: "var(--mui-palette-Alert-successFilledBg)",
          warningFilledBg: "var(--mui-palette-Alert-warningFilledBg)",
          errorFilledColor: "var(--mui-palette-Alert-errorFilledColor)",
          infoFilledColor: "var(--mui-palette-Alert-infoFilledColor)",
          successFilledColor: "var(--mui-palette-Alert-successFilledColor)",
          warningFilledColor: "var(--mui-palette-Alert-warningFilledColor)",
          errorStandardBg: "var(--mui-palette-Alert-errorStandardBg)",
          infoStandardBg: "var(--mui-palette-Alert-infoStandardBg)",
          successStandardBg: "var(--mui-palette-Alert-successStandardBg)",
          warningStandardBg: "var(--mui-palette-Alert-warningStandardBg)",
          errorIconColor: "var(--mui-palette-Alert-errorIconColor)",
          infoIconColor: "var(--mui-palette-Alert-infoIconColor)",
          successIconColor: "var(--mui-palette-Alert-successIconColor)",
          warningIconColor: "var(--mui-palette-Alert-warningIconColor)",
        },
        AppBar: {
          defaultBg: "var(--mui-palette-AppBar-defaultBg)",
        },
        Avatar: {
          defaultBg: "var(--mui-palette-Avatar-defaultBg)",
        },
        Button: {
          inheritContainedBg: "var(--mui-palette-Button-inheritContainedBg)",
          inheritContainedHoverBg:
            "var(--mui-palette-Button-inheritContainedHoverBg)",
        },
        Chip: {
          defaultBorder: "var(--mui-palette-Chip-defaultBorder)",
          defaultAvatarColor: "var(--mui-palette-Chip-defaultAvatarColor)",
          defaultIconColor: "var(--mui-palette-Chip-defaultIconColor)",
        },
        FilledInput: {
          bg: "var(--mui-palette-FilledInput-bg)",
          hoverBg: "var(--mui-palette-FilledInput-hoverBg)",
          disabledBg: "var(--mui-palette-FilledInput-disabledBg)",
        },
        LinearProgress: {
          primaryBg: "var(--mui-palette-LinearProgress-primaryBg)",
          secondaryBg: "var(--mui-palette-LinearProgress-secondaryBg)",
          errorBg: "var(--mui-palette-LinearProgress-errorBg)",
          infoBg: "var(--mui-palette-LinearProgress-infoBg)",
          successBg: "var(--mui-palette-LinearProgress-successBg)",
          warningBg: "var(--mui-palette-LinearProgress-warningBg)",
        },
        Skeleton: {
          bg: "var(--mui-palette-Skeleton-bg)",
        },
        Slider: {
          primaryTrack: "var(--mui-palette-Slider-primaryTrack)",
          secondaryTrack: "var(--mui-palette-Slider-secondaryTrack)",
          errorTrack: "var(--mui-palette-Slider-errorTrack)",
          infoTrack: "var(--mui-palette-Slider-infoTrack)",
          successTrack: "var(--mui-palette-Slider-successTrack)",
          warningTrack: "var(--mui-palette-Slider-warningTrack)",
        },
        SnackbarContent: {
          bg: "var(--mui-palette-SnackbarContent-bg)",
          color: "var(--mui-palette-SnackbarContent-color)",
        },
        SpeedDialAction: {
          fabHoverBg: "var(--mui-palette-SpeedDialAction-fabHoverBg)",
        },
        StepConnector: {
          border: "var(--mui-palette-StepConnector-border)",
        },
        StepContent: {
          border: "var(--mui-palette-StepContent-border)",
        },
        Switch: {
          defaultColor: "var(--mui-palette-Switch-defaultColor)",
          defaultDisabledColor:
            "var(--mui-palette-Switch-defaultDisabledColor)",
          primaryDisabledColor:
            "var(--mui-palette-Switch-primaryDisabledColor)",
          secondaryDisabledColor:
            "var(--mui-palette-Switch-secondaryDisabledColor)",
          errorDisabledColor: "var(--mui-palette-Switch-errorDisabledColor)",
          infoDisabledColor: "var(--mui-palette-Switch-infoDisabledColor)",
          successDisabledColor:
            "var(--mui-palette-Switch-successDisabledColor)",
          warningDisabledColor:
            "var(--mui-palette-Switch-warningDisabledColor)",
        },
        TableCell: {
          border: "var(--mui-palette-TableCell-border)",
        },
        Tooltip: {
          bg: "var(--mui-palette-Tooltip-bg)",
        },
      },
      borderRadius: {
        sm: "calc(var(--mui-shape-borderRadius) / 2)",
        DEFAULT: "var(--mui-shape-borderRadius)",
        lg: "calc(var(--mui-shape-borderRadius) * 2)",
      },
      boxShadow: {
        1: "var(--mui-shadows-1)",
        2: "var(--mui-shadows-2)",
        3: "var(--mui-shadows-3)",
        4: "var(--mui-shadows-4)",
        5: "var(--mui-shadows-5)",
        6: "var(--mui-shadows-6)",
        7: "var(--mui-shadows-7)",
        8: "var(--mui-shadows-8)",
        9: "var(--mui-shadows-9)",
        10: "var(--mui-shadows-10)",
        11: "var(--mui-shadows-11)",
        12: "var(--mui-shadows-12)",
        13: "var(--mui-shadows-13)",
        14: "var(--mui-shadows-14)",
        15: "var(--mui-shadows-15)",
        16: "var(--mui-shadows-16)",
        17: "var(--mui-shadows-17)",
        18: "var(--mui-shadows-18)",
        19: "var(--mui-shadows-19)",
        20: "var(--mui-shadows-20)",
        21: "var(--mui-shadows-21)",
        22: "var(--mui-shadows-22)",
        23: "var(--mui-shadows-23)",
        24: "var(--mui-shadows-24)",
      },
      opacity: {
        activated: "var(--mui-palette-action-activatedOpacity)",
        disabled: "var(--mui-palette-action-disabledOpacity)",
        focus: "var(--mui-palette-action-focusOpacity)",
        hover: "var(--mui-palette-action-hoverOpacity)",
        selected: "var(--mui-palette-action-selectedOpacity)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        h1: { font: "var(--mui-font-h1)", letterSpacing: "-0.01562em" },
        h2: { font: "var(--mui-font-h2)", letterSpacing: "-0.00833em" },
        h3: { font: "var(--mui-font-h3)" },
        h4: { font: "var(--mui-font-h4)", letterSpacing: "0.00735em" },
        h5: { font: "var(--mui-font-h5)" },
        h6: { font: "var(--mui-font-h6)", letterSpacing: "0.0075em" },
        p: { font: "var(--mui-font-body1)", letterSpacing: "0.00938em" },
        span: { font: "var(--mui-font-body2)", letterSpacing: "0.01071em" },
      });
      addUtilities({
        ".typography-h1": { font: "var(--mui-font-h1)" },
        ".typography-h2": { font: "var(--mui-font-h2)" },
        ".typography-h3": { font: "var(--mui-font-h3)" },
        ".typography-h4": { font: "var(--mui-font-h4)" },
        ".typography-h5": { font: "var(--mui-font-h5)" },
        ".typography-h6": { font: "var(--mui-font-h6)" },
        ".typography-subtitle1": { font: "var(--mui-font-subtitle1)" },
        ".typography-subtitle2": { font: "var(--mui-font-subtitle2)" },
        ".typography-body1": { font: "var(--mui-font-body1)" },
        ".typography-body2": { font: "var(--mui-font-body2)" },
        ".typography-button": { font: "var(--mui-font-button)" },
        ".typography-caption": { font: "var(--mui-font-caption)" },
        ".typography-overline": { font: "var(--mui-font-overline)" },
        ".overlay-1": { backgroundImage: "var(--mui-overlays-1)" },
        ".overlay-2": { backgroundImage: "var(--mui-overlays-2)" },
        ".overlay-3": { backgroundImage: "var(--mui-overlays-3)" },
        ".overlay-4": { backgroundImage: "var(--mui-overlays-4)" },
        ".overlay-5": { backgroundImage: "var(--mui-overlays-5)" },
        ".overlay-6": { backgroundImage: "var(--mui-overlays-6)" },
        ".overlay-7": { backgroundImage: "var(--mui-overlays-7)" },
        ".overlay-8": { backgroundImage: "var(--mui-overlays-8)" },
        ".overlay-9": { backgroundImage: "var(--mui-overlays-9)" },
        ".overlay-10": { backgroundImage: "var(--mui-overlays-10)" },
        ".overlay-11": { backgroundImage: "var(--mui-overlays-11)" },
        ".overlay-12": { backgroundImage: "var(--mui-overlays-12)" },
        ".overlay-13": { backgroundImage: "var(--mui-overlays-13)" },
        ".overlay-14": { backgroundImage: "var(--mui-overlays-14)" },
        ".overlay-15": { backgroundImage: "var(--mui-overlays-15)" },
        ".overlay-16": { backgroundImage: "var(--mui-overlays-16)" },
        ".overlay-17": { backgroundImage: "var(--mui-overlays-17)" },
        ".overlay-18": { backgroundImage: "var(--mui-overlays-18)" },
        ".overlay-19": { backgroundImage: "var(--mui-overlays-19)" },
        ".overlay-20": { backgroundImage: "var(--mui-overlays-20)" },
        ".overlay-21": { backgroundImage: "var(--mui-overlays-21)" },
        ".overlay-22": { backgroundImage: "var(--mui-overlays-22)" },
        ".overlay-23": { backgroundImage: "var(--mui-overlays-23)" },
        ".overlay-24": { backgroundImage: "var(--mui-overlays-24)" },
        ".elevation-1": {
          backgroundImage: "var(--mui-overlays-1)",
          boxShadow: "var(--mui-shadows-1)",
        },
        ".elevation-2": {
          backgroundImage: "var(--mui-overlays-2)",
          boxShadow: "var(--mui-shadows-2)",
        },
        ".elevation-3": {
          backgroundImage: "var(--mui-overlays-3)",
          boxShadow: "var(--mui-shadows-3)",
        },
        ".elevation-4": {
          backgroundImage: "var(--mui-overlays-4)",
          boxShadow: "var(--mui-shadows-4)",
        },
        ".elevation-5": {
          backgroundImage: "var(--mui-overlays-5)",
          boxShadow: "var(--mui-shadows-5)",
        },
        ".elevation-6": {
          backgroundImage: "var(--mui-overlays-6)",
          boxShadow: "var(--mui-shadows-6)",
        },
        ".elevation-7": {
          backgroundImage: "var(--mui-overlays-7)",
          boxShadow: "var(--mui-shadows-7)",
        },
        ".elevation-8": {
          backgroundImage: "var(--mui-overlays-8)",
          boxShadow: "var(--mui-shadows-8)",
        },
        ".elevation-9": {
          backgroundImage: "var(--mui-overlays-9)",
          boxShadow: "var(--mui-shadows-9)",
        },
        ".elevation-10": {
          backgroundImage: "var(--mui-overlays-10)",
          boxShadow: "var(--mui-shadows-10)",
        },
        ".elevation-11": {
          backgroundImage: "var(--mui-overlays-11)",
          boxShadow: "var(--mui-shadows-11)",
        },
        ".elevation-12": {
          backgroundImage: "var(--mui-overlays-12)",
          boxShadow: "var(--mui-shadows-12)",
        },
        ".elevation-13": {
          backgroundImage: "var(--mui-overlays-13)",
          boxShadow: "var(--mui-shadows-13)",
        },
        ".elevation-14": {
          backgroundImage: "var(--mui-overlays-14)",
          boxShadow: "var(--mui-shadows-14)",
        },
        ".elevation-15": {
          backgroundImage: "var(--mui-overlays-15)",
          boxShadow: "var(--mui-shadows-15)",
        },
        ".elevation-16": {
          backgroundImage: "var(--mui-overlays-16)",
          boxShadow: "var(--mui-shadows-16)",
        },
        ".elevation-17": {
          backgroundImage: "var(--mui-overlays-17)",
          boxShadow: "var(--mui-shadows-17)",
        },
        ".elevation-18": {
          backgroundImage: "var(--mui-overlays-18)",
          boxShadow: "var(--mui-shadows-18)",
        },
        ".elevation-19": {
          backgroundImage: "var(--mui-overlays-19)",
          boxShadow: "var(--mui-shadows-19)",
        },
        ".elevation-20": {
          backgroundImage: "var(--mui-overlays-20)",
          boxShadow: "var(--mui-shadows-20)",
        },
        ".elevation-21": {
          backgroundImage: "var(--mui-overlays-21)",
          boxShadow: "var(--mui-shadows-21)",
        },
        ".elevation-22": {
          backgroundImage: "var(--mui-overlays-22)",
          boxShadow: "var(--mui-shadows-22)",
        },
        ".elevation-23": {
          backgroundImage: "var(--mui-overlays-23)",
          boxShadow: "var(--mui-shadows-23)",
        },
        ".elevation-24": {
          backgroundImage: "var(--mui-overlays-24)",
          boxShadow: "var(--mui-shadows-24)",
        },
      });
    }),
  ],
};
