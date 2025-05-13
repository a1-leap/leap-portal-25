import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Make sure this matches your repository name exactly
  build: {
    assetsDir: 'assets', // Ensure assets go in a predictable directory
    // Ensure file names don't use hash in development for easier debugging
    outDir: 'docs', // Change output to 'docs' instead of default 'dist'
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
