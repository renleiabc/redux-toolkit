import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteEslint from 'vite-plugin-eslint';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  console.log('🚀 ~ file: vite.config.ts:6 ~ command:', command);
  console.log('🚀 ~ file: vite.config.ts:6 ~ mode:', mode);
  const boo = mode === 'dev';
  const alias = {
    '@': resolve(__dirname, './src')
  };
  return {
    plugins: [
      react(),
      viteEslint({
        //  failOnError: false
        include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts'],
        //  exclue: ['./node_modules/**'],
        cache: false
      })
    ],
    resolve: {
      alias
    },
    css: {
      devSourcemap: boo
    },
    server: {
      host: '0.0.0.0',
      port: 5000,
      open: true
    }
  };
});
