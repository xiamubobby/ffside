var glob = require("glob");

module.exports = {
    entry: glob.sync("./data/modules/pagemods/*.ts"),
    output: {
        path: __dirname,
        filename: "[name].client.js"
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};