const config = require('./config')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].css',
  disable: !config.isProd
})

module.exports = {
  plugins: [
    extractSass
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: !config.isProd,
              modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: !config.isProd}
          },
          {
            loader: 'resolve-url-loader',
            options: {sourceMap: !config.isProd}
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: !config.isProd}
          }
        ],
        // use style-loader in development
        fallback: 'style-loader'
      })
    }]
  }
}
