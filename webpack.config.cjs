const path = require('path');
const nodeExternals = require('webpack-node-externals');

const {
    NODE_ENV = 'production',
} = process.env;
module.exports = {
    externals: [nodeExternals()],
    entry: {
        main: "./src/main.ts"
    },
    mode: NODE_ENV,
    target: 'node',
    output: {
        filename: '[name].cjs',
        path: path.resolve(__dirname, 'public/dist'),
        clean: true
    },
    resolve: {
        extensions: ['.ts', 'tsx', '.js','.cjs'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    experiments: {
        topLevelAwait: true
    }
}