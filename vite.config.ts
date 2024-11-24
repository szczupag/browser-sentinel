/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import webExtension, { readJsonFile } from 'vite-plugin-web-extension';
import { viteStaticCopy } from 'vite-plugin-static-copy';


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
      additionalInputs: ['src/offscreen/offscreen.html'],
    }),
    viteStaticCopy({
      targets: [{ src: 'node_modules/@inboxsdk/core/pageWorld.js', dest: 'dist' }],
    }),
  ],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./testSetup.ts'],
  },
})
