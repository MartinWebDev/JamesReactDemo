// This is a library which help with local file/folder access. 
var path = require("path");

// Setup the main config for webpack. 
var config = {
    // Define the entry point(s) for webpack to start its work. I prefer to just use one main app wrapper and import everything else into that. 
    entry: ["./src/App.tsx"],
    // The output is where the bundled javascript file will be placed and what its name will be. 
    output: {
        path: path.resolve(__dirname, "build"),
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
                loader: "ts-loader", // The name of the loader to use. 
                exclude: /node_modules/ // RegEx to tell what to exclude. Always exclude node_modules folder!
            }
        ]
    },
    // Here we will set up some stuff to tell the dev-server how to run
    devtool: "inline-soure-map",
    devServer: {
        contentBase: path.resolve(__dirname),
        compress: true,
        port: 9000
    }
};

// Export the config so the module loader can read it for webpack
module.exports = config;