/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import webExtension, { readJsonFile } from 'vite-plugin-web-extension';

function generateManifest() {
  const manifest = readJsonFile('./src/manifest.json');
  const pkg = readJsonFile('./package.json');
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest,
  };
}

export default defineConfig({
  plugins: [
    vue(),
    webExtension({
      manifest: generateManifest,
      disableAutoLaunch: true,
      watchFilePaths: ['package.json', 'src/manifest.json'],
    }),
  ],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./testSetup.ts'],
  },
})
