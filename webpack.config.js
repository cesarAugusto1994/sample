var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
        "./src/front/app.js",
        "./src/front/list.js",
        "./src/front/layout.js",
        "./src/front/footer.js",
        "./src/front/views.js",
        "./src/front/single.js"
    ],
    output: {
        filename: "web/assets/build/bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'web/assets/build/vendor.js', Infinity)
    ],
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};