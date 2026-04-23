import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';

export type Keycap01Props = Omit<ButtonBaseProps, 'disableRipple'>;

export function Keycap01({ sx, children, ...props }: Keycap01Props) {
  return (
    <ButtonBase
      disableRipple
      sx={[
        (theme) => ({
          minWidth: 64,
          minHeight: 64,
          p: 1.25,
          borderRadius: 2.5,
          display: 'inline-flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: 1,
          color: 'text.primary',
          outline: 'none',
          '&.Mui-focusVisible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2,
          },
          backgroundColor: 'grey.100',
          backgroundImage:
            'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(0,0,0,0.04) 100%)',
          boxShadow: [
            'inset 0 1px 0 rgba(255,255,255,0.9)',
            'inset 0 -3px 0 rgba(0,0,0,0.1)',
            '0 1px 0 rgba(0,0,0,0.06)',
            '0 2px 4px rgba(0,0,0,0.12)',
          ].join(', '),
          '&:active': {
            transform: 'translateY(2px)',
            boxShadow: [
              'inset 0 1px 0 rgba(255,255,255,0.9)',
              'inset 0 -1px 0 rgba(0,0,0,0.1)',
              '0 0 0 rgba(0,0,0,0)',
              '0 0 0 rgba(0,0,0,0)',
            ].join(', '),
          },
          ...theme.applyStyles('dark', {
            color: 'common.white',
            backgroundColor: 'grey.900',
            backgroundImage:
              'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.5) 100%)',
            boxShadow: [
              'inset 0 1px 0 rgba(255,255,255,0.08)',
              'inset 0 -3px 0 rgba(0,0,0,0.8)',
              '0 1px 0 rgba(0,0,0,0.5)',
              '0 3px 6px rgba(0,0,0,0.6)',
            ].join(', '),
            '&:active': {
              transform: 'translateY(2px)',
              boxShadow: [
                'inset 0 1px 0 rgba(255,255,255,0.08)',
                'inset 0 -1px 0 rgba(0,0,0,0.8)',
                '0 0 0 rgba(0,0,0,0)',
                '0 0 0 rgba(0,0,0,0)',
              ].join(', '),
            },
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
