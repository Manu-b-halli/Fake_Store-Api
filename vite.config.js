import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Fake_Store-Api/", // 👈 Make sure this matches your repo name exactly (case-sensitive!)
});
