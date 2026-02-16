import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        experience: resolve(__dirname, 'experience.html'),
        skills: resolve(__dirname, 'skills.html'),
        contact: resolve(__dirname, 'contact.html'),
        ipseos: resolve(__dirname, 'project-ipseos.html'),
        softsat: resolve(__dirname, 'project-softsat.html'),
        nadia: resolve(__dirname, 'project-nadia.html'),
        flabba: resolve(__dirname, 'project-flabba.html'),
      },
    },
  },
})
