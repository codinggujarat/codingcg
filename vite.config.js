import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: 'Poppins',
            styles: 'wght@400;500;600;700',
          },
        ],
      },
    }),
  ],
});
