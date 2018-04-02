const path = require('path');
const AfterCompilerWebpackPlugin=require('./src/plugins/after-compiler-webpack-plugin');
const CompilerWebpackPlugin=require('./src/plugins/compiler-webpack-plugin');
const DoneWebpackPlugin=require('./src/plugins/done-webpack-plugin');
const EmitWebpackPlugin=require('./src/plugins/emit-webpack-plugin');
const OptionWebpackPlugin=require('./src/plugins/option-webpack-plugin.js');
const RunWebpackPlugin = require('./src/plugins/run-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.less/,
                use:['style-loader','less-loader']
            }
        ]
    },
    plugins:[
        new AfterCompilerWebpackPlugin(),
        new CompilerWebpackPlugin(),
        new DoneWebpackPlugin(),
        new EmitWebpackPlugin(),
        new OptionWebpackPlugin(),
        new RunWebpackPlugin()
    ]
}