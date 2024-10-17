import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: true, // This makes the server accessible externally
    port: 5173, // You can keep this port or change it if needed
  },
})
