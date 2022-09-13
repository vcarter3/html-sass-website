const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'src/assets/[name][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // <-- !!IMPORTANT!!
            }
          }
          
        ],
      },
      {
        test: /\.(png)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'src/assets/[name][ext][query]'
        }
      },
    ],
  },
};