import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  base: mode === 'production' ? '/' : '/', // Ensure correct base path for Netlify
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure alias points to src
      buffer: "buffer/", // Add buffer polyfill
      // Fix the Clerk import resolution
      '@clerk/clerk-react': '@clerk/clerk-react/dist/esm/index.js',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  define: {
    global: {}, // Polyfill global for browser
    'process.env': {} // Handle environment variables
  },
  publicDir: 'public', // Ensure the public folder is correctly referenced
  build: {
    target: 'esnext',
    outDir: 'dist', // Ensure the build output is in the dist folder
    emptyOutDir: true, // Clear the dist folder before building
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      external: [], // Add external dependencies if needed
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
  },
  optimizeDeps: {
    include: ['qrcode', 'buffer'], // Pre-bundle buffer
    esbuildOptions: {
      target: 'esnext'
    },
  },
}));
