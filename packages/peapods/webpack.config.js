const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'peapods.bundle.js',
    libraryTarget: 'umd',
  },
  target: 'web',
  externals: [
    'react',
    '@material-ui/styles',
    'material-ui/core',
    '@material-ui/lab',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // TODO: don't use png, use svg
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: Infinity,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../../src/components/peapods/'),
      src: path.resolve(__dirname, '../../src/'),
    },
  },
};
