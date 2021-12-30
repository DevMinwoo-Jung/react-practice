const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실서비스는 production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./client'],
    // 얘들을 합쳐서 app.js에서 합친다.
  }, // 입력
  module: {
    rules: [{
      test:  /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react' ],
      },
    }],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // __dirname = 현재폴더(lecture), dist는 출력할 곳
    filename: 'app.js',
  }, // 출력
};