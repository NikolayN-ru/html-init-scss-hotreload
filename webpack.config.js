const path = require("path");
const miniCss = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./index.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "index.html"),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss|css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html",
    }),
    new miniCss({ filename: "./style.css" }),
  ],
};
