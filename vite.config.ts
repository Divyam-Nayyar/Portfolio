import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // This enables listening on all network interfaces
    port: 5173,
    open: true,
    strictPort: true, // This ensures Vite only uses the specified port
  }
});