import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react(), svgrPlugin(), eslint()],
  esbuild: {
    loader: 'jsx',
    include: [
      // Add this for business-as-usual behaviour for .jsx and .tsx files
      'src/**/*.jsx',
      'src/**/*.tsx',
      'node_modules/**/*.jsx',
      'node_modules/**/*.tsx',

      // these lines to allow all .js files to contain JSX
      'src/**/*.js',
      'node_modules/**/*.js',

      // these lines to allow all .ts files to contain JSX
      'src/**/*.ts',
      'node_modules/**/*.ts',
    ],
  },
});
