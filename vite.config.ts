
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
    open: true,
    watch: {
      usePolling: false
    },
    hmr: {
      overlay: false
    }
  },
  base: mode === 'production' ? '/' : '/', // Ensure correct base path for Netlify
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: []
      }
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure alias points to src
      buffer: "buffer/", // Add buffer polyfill
      // Fix the Clerk import resolution
      '@clerk/clerk-react': path.resolve(__dirname, 'node_modules/@clerk/clerk-react'),
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
    minify: 'terser',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      external: [], // Add external dependencies if needed
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-slot', '@radix-ui/react-dialog']
        }
      }
    },
  },
  optimizeDeps: {
    include: ['qrcode', 'buffer'], // Pre-bundle buffer
    esbuildOptions: {
      target: 'esnext',
      jsx: 'automatic',
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
}));
