const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  core: {
    builder: 'webpack5',
  },
  babel: async (options) => {
    return ({
      // Update your babel configuration here
      ...options,
    });
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-controls', '@storybook/addon-knobs', '@storybook/preset-scss', {
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss'),
      },
    },
  }, 'storybook-addon-next-router'],
  env: (config) => ({
    ...config,
  }),
  webpackFinal: async (config, { isServer }) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return {
      ...config,
      performance: {
        hints: 'warning',
      },
      resolve: {
        ...config.resolve,
        fallback: {
          ...(config.resolve || {}).fallback,
          fs: false,
        },
        modules: [path.resolve(__dirname, '..'), 'node_modules'],
        alias: {
          ...config.resolve.alias,
          '@public': path.resolve(__dirname, '..', 'public'),
          '@pages': path.resolve(__dirname, '..', 'pages'),
          '@': path.resolve(__dirname, '..', 'src'),
          '@components': path.resolve(__dirname, '..', 'src', 'components'),
          '@contracts': path.resolve(__dirname, '..', 'src', 'contracts'),
          '@styles': path.resolve(__dirname, '..', 'src', 'styles'),
          '@themes': path.resolve(__dirname, '..', 'src', 'themes'),
          '@recoil': path.resolve(__dirname, '..', 'src', 'recoil'),
          '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
          '@emotion/core': resolvePath('node_modules/@emotion/react'),
          '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
          'emotion-theming': resolvePath('node_modules/@emotion/react'),
        },
      },
      plugins: [...config.plugins, new NodePolyfillPlugin()],
    };
  },
};
