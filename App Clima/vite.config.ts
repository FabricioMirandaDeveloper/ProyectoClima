import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Aceptar conexiones desde cualquier IP
    port: 3000, // Puedes cambiar el puerto si es necesario
  },
})
