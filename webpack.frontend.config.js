const dotenv = require('dotenv')
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

dotenv.config({ path: path.resolve(__dirname, '.env') });

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
  
  optimization: {
    usedExports: true, 
    sideEffects: true, 
    minimize: true, 

    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: 10,
        },
      },
    },
    runtimeChunk: 'single',
  },

  performance: {
    maxAssetSize: 2 * 1024 * 1024,
    maxEntrypointSize: 2 * 1024 * 1024,
    hints: 'warning'
  },

 output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js',
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
    open: true,
    compress: true,
    port: process.env.APP_FRONTEND_PORT || 3000,
    historyApiFallback: true, // to make React Router work without 404
  },
};
