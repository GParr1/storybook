import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
        __dirname,
        'src/index.ts',
      ),

      formats: ['es'],

      fileName: 'index',
    },

    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-dom',
        'react-native',
        'react-native-web',
        'react-native-svg',
        'tamagui',
        '@tamagui/lucide-icons-2',
      ],
    },
  },
})
