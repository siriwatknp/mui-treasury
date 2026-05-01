'use client';

import GlobalStyles from '@mui/material/GlobalStyles';
import { type ExternalToast, Toaster, toast as sonnerToast } from 'sonner';

const TOASTER_ID = 'sonner2';
const TOASTER_CLASS = 'mui-sonner2';

type ToastFn = (
  message: Parameters<typeof sonnerToast>[0],
  data?: ExternalToast,
) => string | number;

const withToasterId =
  (fn: ToastFn): ToastFn =>
  (message, data) =>
    fn(message, { ...data, toasterId: TOASTER_ID });

export const toast = Object.assign(withToasterId(sonnerToast), {
  success: withToasterId(sonnerToast.success),
  error: withToasterId(sonnerToast.error),
  warning: withToasterId(sonnerToast.warning),
  info: withToasterId(sonnerToast.info),
  message: withToasterId(sonnerToast.message),
  dismiss: sonnerToast.dismiss,
});

export interface SonnerProps {
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  duration?: number;
  closeButton?: boolean;
}

export function Sonner({
  position = 'bottom-right',
  duration = 4000,
  closeButton = false,
}: SonnerProps) {
  return (
    <>
      <GlobalStyles
        styles={(theme) => {
          const palette = (theme.vars || theme).palette;
          return {
            '[data-sonner-toaster].mui-sonner2': {
              '--normal-bg': `${palette.background.paper} !important`,
              '--normal-border': `${palette.divider} !important`,
              '--normal-text': `${palette.text.primary} !important`,
              '--border-radius': `${(theme.vars || theme).shape.borderRadius} !important`,
              fontFamily: `${theme.typography.fontFamily} !important`,
            },
            '.mui-sonner2 [data-sonner-toast]': {
              boxShadow: `${(theme.vars || theme).shadows[4]} !important`,
              '&:not([data-type])': {
                backgroundImage: 'var(--Paper-overlay) !important',
                ...theme.applyStyles('dark', {
                  '--Paper-overlay': theme.vars.overlays[8],
                }),
              },
            },
            ".mui-sonner2 [data-sonner-toast][data-type='success']": {
              '--normal-text': `${palette.success.main} !important`,
            },
            ".mui-sonner2 [data-sonner-toast][data-type='error']": {
              '--normal-text': `${palette.error.main} !important`,
            },
            ".mui-sonner2 [data-sonner-toast][data-type='warning']": {
              '--normal-text': `${palette.warning.main} !important`,
            },
            ".mui-sonner2 [data-sonner-toast][data-type='info']": {
              '--normal-text': `${palette.info.main} !important`,
            },
            '.mui-sonner2 [data-sonner-toast] [data-title]': {
              color: `${palette.text.primary} !important`,
              fontWeight: `${theme.typography.fontWeightMedium} !important`,
            },
            '.mui-sonner2 [data-sonner-toast] [data-description]': {
              color: `${palette.text.secondary} !important`,
            },
            '.mui-sonner2 [data-sonner-toast] [data-icon]': {
              width: '28px !important',
              height: '28px !important',
              margin: '0 !important',
              borderRadius: '50% !important',
              display: 'flex !important',
              alignItems: 'center !important',
              justifyContent: 'center !important',
              backgroundColor: `${palette.action.selected} !important`,
              '& > svg': {
                width: '16px !important',
                height: '16px !important',
              },
            },
            ".mui-sonner2 [data-sonner-toast][data-type='success'] [data-icon]":
              {
                backgroundColor: `${palette.success.main} !important`,
                color: '#fff',
              },
            ".mui-sonner2 [data-sonner-toast][data-type='error'] [data-icon]": {
              backgroundColor: `${palette.error.main} !important`,
              color: '#fff',
            },
            ".mui-sonner2 [data-sonner-toast][data-type='warning'] [data-icon]":
              {
                backgroundColor: `${palette.warning.main} !important`,
                color: '#fff',
              },
            ".mui-sonner2 [data-sonner-toast][data-type='info'] [data-icon]": {
              backgroundColor: `${palette.info.main} !important`,
              color: '#fff',
            },
            '.mui-sonner2 [data-sonner-toast] [data-button]': {
              color: 'var(--normal-text) !important',
              fontWeight: `${theme.typography.fontWeightBold} !important`,
              textTransform: 'uppercase',
              backgroundColor: 'transparent !important',
              padding: '0 !important',
              height: 'auto !important',
            },
            '.mui-sonner2 [data-sonner-toast] [data-close-button]': {
              color: 'var(--normal-text) !important',
              position: 'static !important' as 'static',
              transform: 'none !important',
              border: 'none !important',
              backgroundColor: 'transparent !important',
              opacity: '1 !important',
              width: '20px !important',
              height: '20px !important',
              order: 99,
              marginLeft: '4px',
            },
          };
        }}
      />
      <Toaster
        id={TOASTER_ID}
        className={TOASTER_CLASS}
        position={position}
        duration={duration}
        closeButton={closeButton}
      />
    </>
  );
}
