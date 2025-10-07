const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', 

  entry: './src/frontend/index.tsx',

  module: {
    rules: [
      // TypeScript + TSX
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // JavaScript + JSX
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },

      // CSS + Tailwind
      {
        test: /\.css$/i,
        use: [
          'style-loader',    
          'css-loader',      
          'postcss-loader',  
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  output: {
    filename: 'js/frontend.bundle.js',
    path: path.resolve(__dirname, 'build/frontend/'),
    clean: true, 
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/frontend/static/index.html'),
      minify: false,
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, './src/frontend/static'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // to make React Router work without 404
  },
};
