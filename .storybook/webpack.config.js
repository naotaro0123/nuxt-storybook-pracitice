const path = require('path');

// TODO: Resolve Css Error
// https://storybook.js.org/docs/configurations/custom-webpack-config/
// Full Control Mode
// module.exports = async ({ config, mode }) => {
//   config.resolve.alias = {
//     '@': path.resolve(__dirname, '..'),
//     '~': path.resolve(__dirname, '..')
//   };
//   config.module.rules.push({
//     test: /\.s?css$/,
//     use: ['style-loader', 'css-loader', 'sass-loader'],
//   });
//   config.module.rules.push({
//     test: /\.pug$/,
//     use: 'pug-plain-loader'
//   });

//   return config;
// }

// Extend Mode
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..'),
      '~': path.resolve(__dirname, '..')
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        loaders: 'pug-plain-loader'
      }
    ]
  }
}
