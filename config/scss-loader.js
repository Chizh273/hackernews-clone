const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('./config')

const loadersArray = [
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
]

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].css',
  disable: !config.isProd
})

module.exports = {
  plugins: [
    extractSass
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, '..', 'src', 'scss', 'index.scss')
        ],
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
            ...loadersArray
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, '..', 'src', 'scss', 'index.scss')
        ],
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: !config.isProd}
            },
            ...loadersArray
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  }
}
