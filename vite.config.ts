import path from "node:path"
import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// For GitHub project sites, CI sets VITE_BASE=/repo-name/ (see .github/workflows).
// User-site repos (…github.io) use VITE_BASE=/
function pagesBase(): string {
  const raw = process.env.VITE_BASE
  if (!raw || raw === "/") return "/"
  const withSlash = raw.endsWith("/") ? raw : `${raw}/`
  return withSlash.startsWith("/") ? withSlash : `/${withSlash}`
}

export default defineConfig({
  base: pagesBase(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
