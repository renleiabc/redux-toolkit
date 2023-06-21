import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteEslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default ({ mode, coommd }) => {
  console.log('🚀 ~ file: vite.config.ts:6 ~ coommd:', coommd);
  console.log('🚀 ~ file: vite.config.ts:6 ~ mode:', mode);
  defineConfig({
    plugins: [
      react(),
      viteEslint({
        //  failOnError: false
        include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts'],
        //  exclue: ['./node_modules/**'],
        cache: false
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 5000,
      open: true
    }
  });
};
