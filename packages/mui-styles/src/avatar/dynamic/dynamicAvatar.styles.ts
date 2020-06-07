export type DynamicAvatarStyleProps = {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  radius?: number | string;
}

export type DynamicAvatarClassKey = keyof ReturnType<typeof dynamicAvatarStyles>

const dynamicAvatarStyles = () => ({
  root: ({ size = 48, width, height, radius }: DynamicAvatarStyleProps) => ({
    width: width || size,
    height: height || size,
    borderRadius: radius,
  })
})

export default dynamicAvatarStyles
