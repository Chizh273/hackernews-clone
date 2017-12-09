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
    test: /\.html$/,
    use: [{loader: 'html-loader'}]
  }
]
