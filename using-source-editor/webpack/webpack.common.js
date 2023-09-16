const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (vendor) => {
  return {
    entry: path.join(__dirname, "..", "src", "index.tsx"),
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        react: path.resolve(path.join(__dirname, "..", "./node_modules/react")),
        "react-dom": path.resolve(
          path.join(__dirname, "..", "./node_modules/react-dom")
        ),
      },
    },
    mode: "development",
    output: {
      path: path.join(__dirname, "..", "build"),
      filename: path.join("static", "bundle.[contenthash].js"),
      assetModuleFilename: "images/[name].[contenthash][ext]",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(ico|png|jpe?g|svg|gif)$/,
          type: "asset/resource",
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "..", "public", "index.html"),
      }),
    ],
  };
};
