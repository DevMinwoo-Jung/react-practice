const path = require('path');
const { webpack } = require('webpack');

module.exports = {
  name: 'gugudan-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx','.js']
  },
  entry: {
    app: ['./client'],
  },
  module: {
    rules: [{
      test:  /\.jsx?/,
      loader: 'babel-loader',
      options: {
        // presets은 plugin모음!
        presets: [
          ['@babel/preset-env', {
          targets: {
            browsers: ['> 5% in KR', 'last 2 chrome versions'],
          },
          debug: true,
        }], 
        '@babel/preset-react',
      ],
        plugins: [],
      },
    }],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};