import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If you're using React

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the base is set to '/'
  build: {
    outDir: 'dist', // Default output directory for Vite builds
  },
});
