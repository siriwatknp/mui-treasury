import React from 'react'
import * as Icons from './icons'

export type SocialIconProps = {
  brand: keyof typeof Icons
} & React.SVGProps<SVGSVGElement>

export default function SocialIcon({ brand, ...props }: SocialIconProps) {
  const Icon = React.useMemo(() => Icons[brand], [brand])
  return <Icon {...props} />
}
