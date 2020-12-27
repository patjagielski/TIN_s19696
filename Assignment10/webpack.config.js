const path = require('path');

module.exports = {
  name:'server',
  target:'node',
  entry: './index.js',
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
}