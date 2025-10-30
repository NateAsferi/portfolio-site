import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'portfolio-site';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});