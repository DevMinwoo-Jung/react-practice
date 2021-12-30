const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: './clinet',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react' ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    }],
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};