// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://IEVN1001-22001439.github.io/viktor-portfolio/',
  base: '/viktor-portfolio/',
});
