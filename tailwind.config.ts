import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom theme extensions here
      colors: {
        // Example: custom colors
        'primary': '#3B82F6',
        'secondary': '#10B981',
      },
    },
  },
  plugins: [],
} satisfies Config 