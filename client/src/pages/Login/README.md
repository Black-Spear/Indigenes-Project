# Chakra UI Pro

In this guide we will explain how you can integrate this component into your
project as quickly as possible.

If you don't have a project setup using Chakra UI, head over to the
[Chakra UI documentation](https://chakra-ui.com/docs/getting-started)
and pick a framework of your choice.

## Themeable Components

Currently we are migrating our components to themeable components.
To check if this is a theme-based component, look for a badge `Themeable`
next to the components name. In that case you need to install Chakra UI Pro Theme.

### What is a themeable component?

Instead of writing the same code over and over again (e.g. disabling the focus outline)
and re-skinning simple UI components, we move that logic into the **Chakra UI Pro Theme**.
Or in other words we make use of the idea of a **Design System**.

### Setup up Chakra UI Pro Theme

There are two ways to install the theme. Using the npm registry (recommended)
or download the sources directly from the Chakra UI Pro website (advanced).

Let's start with the easy way - to do this just type

```
yarn add @chakra-ui/pro-theme # or npm install @chakra-ui/pro-theme
```

If you want to change the Chakra UI Pro theme more flexibly, it's best
to get a local copy. [Download Chakra UI Pro Theme](https://pro.chakra-ui.com/downloads/themes/chakra-ui-pro-theme.zip)
and add the contents to your project.

The Chakra UI Pro Theme uses [Google Font Inter](https://fonts.google.com/specimen/Inter)
by default, but can be configured otherwise. Since Inter is only a suggestion,
we have not bundled the font with it. The easiest way to install the font is as follows:

```
yarn add @fontsource/inter # or npm install @fontsource/inter
```

Now import the font in a convenient place, for example in your app.

```
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css'

export const App = () => {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.purple },
    },
    theme,
  )
  return (
    <ChakraProvider theme={myTheme}>
      <MyAwesomeProject />
    </ChakraProvider>
  )
}
```

## Additional Depedencies

We try to avoid extra dependencies wherever possible. If a component requires
an additional dependency, this is highlighted in the source code.
A lot of components use `react-icons` to pep up the visual appearance.
Feel free to replace them with your own icons.

All dependencies are updated regularly and the components are adjusted if necessary.
