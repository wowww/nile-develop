const withPlugins = require('next-compose-plugins');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 */
const nextPlugins = [withPWA, {
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    buildExcludes: [/middleware-manifest.json$/],
  },
}];

const nextConfig = {
  images: {
    domains: ['file.mir4global.com', 'localhost'],
    images: {
      loader: 'custom',
      images: {
        remotePatterns: [{
          loader: 'custom',
          path: 'https://file.mir4global.com/nile/resources',
        }],
      },
    },
  },
  plugins: [new NodePolyfillPlugin()],
  env: {
    ENV_WEMIX_MICROSCOPE_API: 'https://microscopeapi.test.wemix.com',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [{
      source: '/api/:path*',
      destination: 'https://medium.com/:path*',
    }];
  },
  i18n,
};

module.exports = withPlugins(nextPlugins, nextConfig);
