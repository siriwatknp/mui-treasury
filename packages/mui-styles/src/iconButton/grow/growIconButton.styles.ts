import { createStyles } from '@material-ui/core/styles';
export type GrowIconButtonStyleProps = {
  color?: string;
  thickness?: number;
}

export type GrowIconButtonClassKey = keyof ReturnType<typeof growIconButtonStyles>

const growIconButtonStyles = ({ palette }) => createStyles({
  root: ({ color = palette.primary.light, thickness = 3 }) => ({
    backgroundColor: '#fff',
    boxShadow: 'none',
    transition: '0.3s cubic-bezier(.47,1,.41,.8)',
    '&:hover, &:focus': {
      backgroundColor: '#fff',
      boxShadow: `0 0 0 ${thickness}px ${color}`,
    }
  })
})

export default growIconButtonStyles
