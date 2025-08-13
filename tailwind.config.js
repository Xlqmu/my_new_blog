/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // 启用类名-based 暗模式
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#6b7280',
        accent: '#2337ff',
      },
      fontFamily: {
        sans: ['Atkinson', 'sans-serif'],
      },
      backgroundColor: {
        'dark-primary': '#1a1f35',
        'dark-secondary': '#111827',
      },
      textColor: {
        'dark-primary': '#F9FAFB',
        'dark-secondary': '#D1D5DB',
      }
    },
  },
  plugins: [],
}
