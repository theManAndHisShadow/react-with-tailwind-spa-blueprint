const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/frontend/index.tsx',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },

  output: {
    filename: 'js/frontend.bundle.js',
    path: path.resolve(__dirname, 'build/frontend/') 
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/frontend/static/index.html'),
      minify: false
    })
  ]
}