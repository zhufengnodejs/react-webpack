const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/.js$/,
                include: path.resolve('src'),
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets:[
                            "env","stage-0","react"
                        ]
                    }
                }
            },
            {
                test:/\.css/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}