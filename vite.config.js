import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  mode: process.env.NODE_ENV || 'staging',
  plugins: [sveltekit()]
})