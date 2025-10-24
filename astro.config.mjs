// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://IEVN1001-22001439.github.io',
  base: '/viktor-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
