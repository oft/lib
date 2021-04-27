const path = require('path');
const pkg = require(path.join(__dirname,"package.json"))
const libpkg = require(path.join(__dirname,"../package.json"))

module.exports = {
    mode:'development',//'development' or 'production'
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts'],
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: pkg.name+'.js',
        library: {
            name: libpkg.name,
            type: 'umd',
        }
    }
}
