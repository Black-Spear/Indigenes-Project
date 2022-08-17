import { chakra, useColorModeValue } from '@chakra-ui/react'

export const Logo = (props) => {
  // const { iconColor = 'currentColor', ...rest } = props

  const colores = useColorModeValue('black', 'white')

  return (
    <chakra.svg      viewBox="0 0 609 728" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* kenet {...rest} */}
      <path d="M0.210205 288.298V727.273H130.845V102.395L4.20232 283.332C2.93319 285.136 1.5989 286.792 0.210205 288.298Z" fill={colores}/>
<path d="M209.155 341.655V107.822L449.074 457.386H455.466V0H608.52V727.273H475.707L209.155 341.655Z" fill={colores}/>
<path d="M129 0.272705H0V183.273L129 0.272705Z" fill="#E3BF3E"/>
 </chakra.svg>
  )
}
