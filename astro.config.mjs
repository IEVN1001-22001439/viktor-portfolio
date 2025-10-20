// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://ievn1001-22001439.github.io/viktor-portfolio/',
  base: '/viktor-portfolio/',
});
