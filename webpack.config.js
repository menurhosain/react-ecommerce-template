const path = require("path");
module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "/publick/js/"),
    filename: "bundle.js",
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
