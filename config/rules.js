module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      {loader: 'react-hot-loader/webpack'},
      {loader: 'babel-loader'},
      {loader: 'eslint-loader'}
    ]
  },
  {
    test: /\.(png|jpg|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'images/'
        }
      }
    ]
  },
  {
    test: /\.(ttf|woff2|eot|woff)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/'
        }
      }
    ]
  },
  {
    test: /\.html$/,
    use: [{loader: 'html-loader'}]
  }
]
