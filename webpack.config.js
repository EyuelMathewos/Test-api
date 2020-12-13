const path = require('path');
require("babel-register");
module.exports = {
entry:{app:'./index.js'}
,
output:{
    path:path.resolve(__dirname,'build'),
    filename:'bundle.js'
},
target: 'node',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
             },
        exclude: /node_modules/,
      },
    ],
  }
}