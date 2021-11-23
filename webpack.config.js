const path = require('path')
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    // placeholder 占位符
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 2048, // 2kb
                    // mimetype: 'image/type'
                }
            }
        },
        {
            test: /\.scss$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 2,  // 保证scss文件里引入别的scss文件也会走下面的sass-loader & postcss-loader
                    // modules: true // css 模块化
                }
            }, 'sass-loader', 'postcss-loader']
        },
        {
            test: /\.(ttf|woff|woff2)$/, //  打包字体文件
            use: {
                loader: 'file-loader'
            }
        }]
    }
}