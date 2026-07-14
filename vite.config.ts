import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  server: {
    allowedHosts: ["sb-6g0qxrcorcgj.vercel.run", "sb-32es7m0pl4sq.vercel.run", "sb-azpnbhq4wgfw.vercel.run"],
  },
});
