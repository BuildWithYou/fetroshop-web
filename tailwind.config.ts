import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#2563eb',
        secondary: '#6b7280',
        success: '#16a34a',
        danger: '#b91c1c',
        warning: '#ca8a04',
        info: '#22d3ee',
        primaryDark: '#1e3a8a',
        secondaryDark: '#64748b',
        successDark: '#14532d',
        dangerDark: '#7f1d1d',
        warningDark: '#713f12',
        infoDark: '#1e3a8a',
        light: '#f8fafc',
        dark: '#020617',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
