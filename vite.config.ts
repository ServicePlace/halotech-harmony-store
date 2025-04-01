import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure alias points to src
      buffer: "buffer", // Add buffer polyfill
    },
  },
  define: {
    global: {}, // Polyfill global for browser
  },
  build: {
    rollupOptions: {
      external: ['@solana/pay'], // Only externalize @solana/pay
    },
  },
  optimizeDeps: {
    include: ['qrcode', 'buffer'], // Pre-bundle buffer
  },
}));
