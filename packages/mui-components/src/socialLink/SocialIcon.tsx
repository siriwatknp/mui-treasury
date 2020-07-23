import React from 'react'
import * as Icons from './icons'

export type SocialIconProps = {
  brand: keyof typeof Icons
} & React.SVGProps<SVGSVGElement>

export default function SocialIcon({ brand, ...props }: SocialIconProps) {
  const Icon = React.useMemo(() => Icons[brand], [brand])
  if (!Icon) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`brand: '${brand}' is invalid for SocialIcon`)
    }
    return null
  }
  return <Icon {...props} />
}
