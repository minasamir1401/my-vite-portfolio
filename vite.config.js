import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-vite-portfolio/",  // <-- مهم جدًا تضيف هذا السطر
  plugins: [react()]
});
