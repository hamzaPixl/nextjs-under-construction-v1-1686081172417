import injected from './src/injected.json'

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      input: injected.colors.main.input,
      secondary: injected.colors.main.secondary,
      primaryText: injected.colors.main.primaryText,
      secondaryText: injected.colors.main.secondaryText,
      primaryBg: injected.colors.main.primaryBg,
      secondaryBg: injected.colors.main.secondaryBg,
      footerText: injected.colors.footer.footerText,
      footerBg: injected.colors.footer.footerBg,
      headerText: injected.colors.header.headerText,
      headerBg: injected.colors.header.headerBg,
      error: injected.colors.state.error,
      success: injected.colors.state.success,
      warning: injected.colors.state.warning,
      text: injected.colors.state.text,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
