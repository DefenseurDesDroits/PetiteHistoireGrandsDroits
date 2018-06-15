const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/main.js'),
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  }
};
