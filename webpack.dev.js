const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlPages = [
  "about",
  "cart",
  "man",
  "popup",
  "product",
  "selection",
  "woman",
];

const multipleHtmlPlugins = htmlPages.map((name) => {
  return new HtmlWebpackPlugin({
    template: `${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
  });
});

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/controller.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
    }),
  ].concat(multipleHtmlPlugins),
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(svg|jpg|gif)$/,
        use: {
          loader:
            "file-loader?name=[path][name].[ext]!extract-loader!html-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
