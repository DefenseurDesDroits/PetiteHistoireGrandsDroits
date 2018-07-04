const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/js/main.js'),
    vraieshistoires: path.resolve(__dirname, 'src/js/vraieshistoires.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name].js'
  }
}