// This library is for generating the output html root file from a template. (Our template will be lazy, just an exact html file).
var HtmlWebpackPlugin = require('html-webpack-plugin');

// This is a library which help with local file/folder access.
var path = require("path");

// Setup the main config for webpack. 
var config = {
    // Define the entry point(s) for webpack to start its work. I prefer to just use one main app wrapper and import everything else into that. 
    entry: ["./src/App.tsx"],
    // The output is where the bundled javascript file will be placed and what its name will be. 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "App.js"
    },
    // This tells webpack what files to look for when compiling the app. 
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        // Rules can be used to add extensions to webpack to do additional things. For example, converting typescript to javascript requires ts-loader.
        rules: [
            {
                test: /\.tsx?$/, //RegEx telling webpack what to let this loader work on. 
                use: "ts-loader", // The name of the loader (or other plugin) to use. 
                exclude: /node_modules/, // RegEx to tell what to exclude. Always exclude node_modules folder!
            }
        ]
    },
    watch: true, // Watch for file changes
    // Here we will set up some stuff to tell the dev-server how to run
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"), // Where to serve the files from. This would change if you change the output location from webpack.
        compress: true, // Enable gzip compression
        port: 3000,
        historyApiFallback: {
            index: 'index.html' // This allows us to enable HTML5 style single page deep linking on webpack-dev-server. Production server will need configuring too
        },
        stats: "errors-only",
        open: true,
        openPage: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Temp - not actually needed",
            hash: true,
            template: "./src/index.html"
        })
    ]
};

// Export the config so the module loader can read it for webpack
module.exports = config;