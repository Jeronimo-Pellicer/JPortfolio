import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://jpstudio.app',
        dynamicRoutes: [
          '/',
          '/herramientas',
          '/projects',
          '/recursos',
          '/books',
          // Guías
          '/recursos?article=guia-customer-journey-map',
          '/recursos?article=guia-seo-local',
          '/recursos?article=guia-estrategia-linkedin',
          // Infografías
          '/recursos?article=infografia-anatomia-post-linkedin',
          '/recursos?article=infografia-optimizacion-atencion-cliente',
          '/recursos?article=infografia-palabras-clave',
          '/recursos?article=infografia-elementos-landing-page',
        ],
    }),
  ],
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
          'react-vendor': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          'gsap': ['gsap'],
          'framer': ['framer-motion'],
          'radix-ui': ['@radix-ui/react-label', '@radix-ui/react-progress', '@radix-ui/react-select', '@radix-ui/react-slider', '@radix-ui/react-slot', '@radix-ui/react-tabs', '@radix-ui/react-tooltip'],
          'dnd': ['@hello-pangea/dnd'],
          'ogl': ['ogl'],
          'ui-components': ['sonner', 'lucide-react'],
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Minify for production using esbuild (built-in, no dependencies needed)
    minify: 'esbuild',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    exclude: ['ogl'],
  },
})
