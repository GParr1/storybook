import type { StorybookConfig } from '@storybook/react-vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

const config: StorybookConfig = {
  stories: [
    '../test/**/*.mdx',
    '../test/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],

  framework: '@storybook/react-vite',

  viteFinal: async (config) => {
    return {
      ...config,

      plugins: [
        ...(config.plugins ?? []),
        tamaguiPlugin({
          config: 'src/tamagui.config.ts',
          components: ['tamagui'],
          disableExtraction: true,
        }),
      ],

      resolve: {
        ...config.resolve,

        alias: {
          ...(config.resolve?.alias ?? {}),

          'react-native$': 'react-native-web',
          'react-native': 'react-native-web',
        },
      },

      define: {
        ...config.define,

        'process.env': {
          NODE_ENV: 'development',
          TEST_NATIVE_PLATFORM: 'web',
        },

        'process.env.NODE_ENV': JSON.stringify('development'),
      },

      optimizeDeps: {
        ...config.optimizeDeps,

        esbuildOptions: {
          ...config.optimizeDeps?.esbuildOptions,

          resolveExtensions: [
            '.web.js',
            '.web.jsx',
            '.web.ts',
            '.web.tsx',
            '.mjs',
            '.js',
            '.mts',
            '.ts',
            '.jsx',
            '.tsx',
            '.json',
          ],
        },
      },
    }
  },
}

export default config