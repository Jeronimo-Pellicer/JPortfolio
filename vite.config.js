import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate heavy vendor libraries into their own chunks
          'gsap': ['gsap'],
          'framer-motion': ['framer-motion'],
          'radix-ui': ['@radix-ui/react-label', '@radix-ui/react-progress', '@radix-ui/react-select', '@radix-ui/react-slider', '@radix-ui/react-slot', '@radix-ui/react-tabs', '@radix-ui/react-tooltip'],
          'dnd': ['@hello-pangea/dnd'],
          'ogl': ['ogl'],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
})
