/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },

    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.json',
    ],
  },

  build: {
    emptyOutDir: false,

    lib: {
      entry: path.resolve(
          import.meta.dirname,
          'src/index.ts',
      ),

      formats: ['es'],

      fileName: 'index',
    },

    rolldownOptions: {
      external: [
        'react',
        'react-dom',
        'react-native',
        'react-native-web',
        'react-native-svg',
        'tamagui',
        '@tamagui/lucide-icons-2',
      ],
    },
  },

  test: {},
})