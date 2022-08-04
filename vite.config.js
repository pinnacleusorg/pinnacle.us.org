import { defineConfig } from 'vite'

export default defineConfig({
  mode: process.env.NODE_ENV || 'staging'
})