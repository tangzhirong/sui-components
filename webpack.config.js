/**
 * @file webpack.config.js
 * @date 2019-01-14 17.25.43
 */
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const suiComponentsIndex = path.resolve(
  __dirname,
  "..",
  "sui-core/src/core/index.js"
);

module.exports = {
  mode: "none",
  entry: suiComponentsIndex,
  output: {
    filename: "sui-components.js",
    path: path.resolve(__dirname, "dist"),
    libraryExport: "default",
    library: "sui-components",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            {
              plugins: [
                "transform-remove-console",
                "transform-class-properties"
              ]
            }
          ]
        }
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "sui-components.css",
      chunkFilename: "[id].css"
    })
  ],
  externals: {
    react: "react",
    antd: "antd",
    "react-dom": "react-dom"
  }
};
