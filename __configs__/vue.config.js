const path = require('path');  // Ajout de l'importation du module path
const { defineConfig } = require('@vue/cli-service');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');  // Assure-toi que ce module est bien importé

module.exports = defineConfig({
  publicPath: '/',
  build: {
    assetsDir: '',
  },
  transpileDependencies: true,
  configureWebpack: {
    cache: {
      type: 'filesystem', // Use file system caching for faster rebuilds
    },
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  },
  plugins: [

  ],
});
