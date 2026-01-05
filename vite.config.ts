import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    {
      name: 'figma-asset-loader',
      resolveId(source) {
        if (source.startsWith('figma:asset/')) {
          return '\0' + source
        }
      },
      load(id) {
        if (id.startsWith('\0figma:asset/')) {
          return `export default "https://placehold.co/600x400?text=Figma+Asset"`
        }
      },
    },
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})
