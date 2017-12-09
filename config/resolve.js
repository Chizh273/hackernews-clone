const path = require('path')

module.exports = {
  extensions: ['.js', '.jsx'],
  alias: {
    '@': path.join(__dirname, '..', 'src'),
    scss: path.join(__dirname, '..', 'src/scss')
  }
}
