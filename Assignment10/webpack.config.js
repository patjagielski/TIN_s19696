const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}