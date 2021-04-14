const path = require('path')

module.exports = {
    // mode of running webpack; 'development' | 'production'
    mode: 'development',
    entry: "./src/app.ts",
    output: {
        // we can add dynamic hashing with inbuilt variables like bundle.[contenthash].js, refer to webpack docs
        filename: "bundle.js",
        // path should match tsconfig outDir setting. Here the path should be an absolute path.
        path: path.resolve(__dirname, "dist")
    },
    // this generates the sourcemap .map files, which helps in better development debugging experience
    devtool: 'inline-source-map',
    // below module config tells what should be done with individual files
    module: {
        // we add rules for different types of files( .css, .js, .ts, .sass etc.,)
        // all rules are javascript objects
        rules: [
            {
                //regex that checks for files ending with .ts
                test: /\.ts$/,
                // what loader to be used above extension
                use: 'ts-loader',
                // folder to be excluded from parsing or reading
                exclude: /node_modules/
            }
        ]
    },
    // what all are the files to be resolved by webpack.
    resolve: {
        extensions: ['.ts', '.js']
    },
    //below config object is for webpack serve; it just recompiles in-memory when we make any changes in the code/files.
    devServer: {
        open: true,
        publicPath: "/dist/"
    }

}