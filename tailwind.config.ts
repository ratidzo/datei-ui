import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    /**
     * Setup our color scheme from figma.
     */

    colors: {
      grey: {
        100: '#FAFAFA',
        200: '#CBD4E6',
        300: '#A1B0CC',
        400: '#7C8DB0',
        500: '#657491',
        600: '#52556F',
        700: '#52556F',
        800: '36374A',
        900: '#27273F'
      }, 
      purple: {
        blue: '#605DEC',
        light: '#BCBAF7'
      },
      black: '#000000',
      white: '#FFFFFF'
    }
  },
  plugins: [],
}
export default config
