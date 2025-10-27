// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Determinar si estamos en Netlify
const isNetlify = process.env.NETLIFY === 'true' || process.env.CONTEXT === 'production';

export default defineConfig({
  site: isNetlify 
    ? 'https://viktor-fbx.netlify.app'  // Reemplaza con tu URL de Netlify
    : 'https://IEVN1001-22001439.github.io',
  base: isNetlify 
    ? '/'  // En Netlify no necesitas base path
    : '/viktor-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});