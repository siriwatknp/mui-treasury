"use client";

import GlobalStyles from "@mui/material/GlobalStyles";
import { Toaster, toast } from "sonner";

export { toast };

export interface SonnerProps {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  duration?: number;
  closeButton?: boolean;
}

export function Sonner({
  position = "bottom-right",
  duration = 4000,
  closeButton = false,
}: SonnerProps) {
  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          "[data-sonner-toaster]": {
            "--normal-bg": `${
              (theme.vars || theme).palette.background.paper
            } !important`,
            "--normal-border": `${
              (theme.vars || theme).palette.divider
            } !important`,
            "--normal-text": `${
              (theme.vars || theme).palette.text.primary
            } !important`,
            "--success-bg": `${
              (theme.vars || theme).palette.success.main
            } !important`,
            "--success-border": `${
              (theme.vars || theme).palette.success.dark
            } !important`,
            "--success-text": `${
              (theme.vars || theme).palette.success.contrastText
            } !important`,
            "--error-bg": `${
              (theme.vars || theme).palette.error.main
            } !important`,
            "--error-border": `${
              (theme.vars || theme).palette.error.dark
            } !important`,
            "--error-text": `${
              (theme.vars || theme).palette.error.contrastText
            } !important`,
            "--warning-bg": `${
              (theme.vars || theme).palette.warning.main
            } !important`,
            "--warning-border": `${
              (theme.vars || theme).palette.warning.dark
            } !important`,
            "--warning-text": `${
              (theme.vars || theme).palette.warning.contrastText
            } !important`,
            "--info-bg": `${
              (theme.vars || theme).palette.info.main
            } !important`,
            "--info-border": `${
              (theme.vars || theme).palette.info.dark
            } !important`,
            "--info-text": `${
              (theme.vars || theme).palette.info.contrastText
            } !important`,
            "--border-radius": `${
              (theme.vars || theme).shape.borderRadius
            } !important`,
            fontFamily: `${theme.typography.fontFamily} !important`,
          },
          "[data-sonner-toast]": {
            boxShadow: `${(theme.vars || theme).shadows[4]} !important`,
            "&:not([data-type])": {
              backgroundImage: "var(--Paper-overlay) !important",
              ...theme.applyStyles("dark", {
                "--Paper-overlay": theme.vars.overlays[8],
              }),
            },
          },
          "[data-sonner-toast] [data-title]": {
            fontWeight: `${theme.typography.fontWeightMedium} !important`,
          },
          "[data-sonner-toast] [data-description]": {
            color: `${(theme.vars || theme).palette.text.secondary} !important`,
          },
          "[data-sonner-toast][data-type='success'] [data-description], [data-sonner-toast][data-type='error'] [data-description], [data-sonner-toast][data-type='warning'] [data-description], [data-sonner-toast][data-type='info'] [data-description]":
            {
              opacity: "0.9 !important",
              color: "inherit !important",
            },
        })}
      />
      <Toaster
        richColors
        position={position}
        duration={duration}
        closeButton={closeButton}
      />
    </>
  );
}
