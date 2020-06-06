export type OnlineAvatarStyleProps = {
  color?: string;
  avatarSize?: number;
  ringSize?: number;
  radius?: number;
}

export type OnlineAvatarClassKey = keyof ReturnType<typeof onlineAvatarStyles>

const onlineAvatarStyles = () => ({
  root: ({ color, avatarSize = 40, ringSize = avatarSize + 8, radius = 40 }: OnlineAvatarStyleProps) => ({
    position: 'relative' as const,
    display: 'inline-block',
    '& > *': {
      width: avatarSize,
      height: avatarSize,
      borderRadius: radius,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute' as const,
      width: ringSize,
      height: ringSize,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: radius,
      border: '2px solid',
      borderColor: color,
    }
  })
})

export default onlineAvatarStyles
