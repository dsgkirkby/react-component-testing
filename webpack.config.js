var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/, loader: 'babel', exclude: /node_modules/
      },
      {
        test: /\.css/, loader: "style!css", exclude: /node_modules/
      }
    ]
  }
};