const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/backend/index.ts',
  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  output: {
    filename: 'js/backend.bundle.js',
    path: path.resolve(__dirname, 'build/backend/') 
  },

  plugins: []
}