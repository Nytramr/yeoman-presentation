var path = require("path");

var appRoot = path.join(__dirname, '../app');

module.exports = {
  devtool: 'eval',
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader'}
    ]
  },
  resolve: {
    root: [path.join(appRoot, './routes')],
    alias: {
      actions: path.join(appRoot, './actions'),
      components: path.join(appRoot, './components'),
      constants: path.join(appRoot, './constants'),
      dispatchers: path.join(appRoot, './dispatchers'),
      stores: path.join(appRoot, './stores')
    },
    extensions: ["", ".js", ".jsx"]
  }
}
