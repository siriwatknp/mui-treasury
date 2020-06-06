export type DynamicAvatarStyleProps = {
  size?: number | string,
  radius?: number | string,
}

export type DynamicAvatarClassKey = keyof ReturnType<typeof dynamicAvatarStyles>

const dynamicAvatarStyles = () => ({
  root: ({ size, radius }: DynamicAvatarStyleProps) => ({
    width: size,
    height: size,
    borderRadius: radius,
  })
})

export default dynamicAvatarStyles
