const path = require("path")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    // open: true,
    watchFiles: path.join(__dirname, "src"),
    hot: true,
    port: 8080,
    proxy: {
      "/api": "http://localhost:8060",
    },
    historyApiFallback: true,
  },
  module: {
    rules: [],
  },
  // plugins: [new ReactRefreshWebpackPlugin({overlay: false})],
}
