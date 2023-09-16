const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [],
  },
  plugins: [new CleanWebpackPlugin()],
}
