// webpack.config.js

const path = require("path");
const {
  CKEditorTranslationsPlugin,
} = require("@ckeditor/ckeditor5-dev-translations");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");

module.exports = {
  entry: "./main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    // More plugins.
    // ...

    new CKEditorTranslationsPlugin({
      // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
      language: "ru",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        use: ["raw-loader"],
      },
      {
        test: /\.(ico|png|jpe?g|svg|gif)$/,
        exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "singletonStyleTag",
              attributes: {
                "data-cke": true,
              },
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
                },
                minify: true,
              }),
            },
          },
        ],
      },
    ],
  },
};
