import { chakra } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = (props) => (
  <chakra.svg
    color="accent"
    height="8"
    width="auto"
    viewBox="0 0 482 89"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0.210205 288.298V727.273H130.845V102.395L4.20232 283.332C2.93319 285.136 1.5989 286.792 0.210205 288.298Z" fill="white"/>
    <path d="M209.155 341.655V107.822L449.074 457.386H455.466V0H608.52V727.273H475.707L209.155 341.655Z" fill="white"/>
    <path d="M129 0.272705H0V183.273L129 0.272705Z" fill="#E3BF3E"/>
  </chakra.svg>
)