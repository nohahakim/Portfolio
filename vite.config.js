import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true, // Show error overlay in browser
    },
    watch: {
      usePolling: true, // Use polling if file changes aren't detected
      interval: 1000, // Interval for polling
    },
  },
});
