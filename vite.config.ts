import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
      buffer: "buffer", // Add buffer polyfill
      '@clerk/clerk-react': '/node_modules/@clerk/clerk-react',
    },
  },
  define: {
    global: {}, // Polyfill global for browser
  },
  build: {
    rollupOptions: {
      external: ['@solana/pay', '@clerk/clerk-react'], // Only externalize @solana/pay and @clerk/clerk-react
    },
  },
  optimizeDeps: {
    include: ['qrcode', 'buffer'], // Pre-bundle buffer
    esbuildOptions: {
      // Enable polyfills for Node.js globals
      define: {
        global: 'globalThis',
      },
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
