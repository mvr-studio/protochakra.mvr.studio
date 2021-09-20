import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    darkNavy: '#3a3a4f',
    lightGrey: '#E9EAF2',
    darkGrey: '#3C3E44',
    dark: {
      50: '#ffffff',
      100: '#ffffff',
      200: '#ffffff',
      300: '#ffffff',
      400: '#ffffff',
      500: '#000000',
      600: '#000000',
      700: '#000000',
      800: '#000000',
      900: '#000000'
    },
    primary: {
      50: '#e0ecff',
      100: '#b0c6ff',
      200: '#7ea0ff',
      300: '#4b7aff',
      400: '#1a54ff',
      500: '#003be6',
      600: '#002eb4',
      700: '#002182',
      800: '#001451',
      900: '#000721'
    }
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', serif",
    mono: "'Poppins', monospace"
  },
  borders: {
    default: '1px #E9EAF2 solid',
    darkMode: '1px #3a3a4f solid',
    darkModeLight: '1px #5a5a75 solid'
  },
  shadows: {
    default: '0 0.25rem 1.5rem rgba(0, 0, 0, 0.05)',
    darker: '0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)'
  }
})

export default theme
