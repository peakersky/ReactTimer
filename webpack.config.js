var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            applicationStyles: 'app/styles/app.scss',
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Countdown: 'app/components/Countdown.jsx',
            Timer: 'app/components/Timer.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader', // helps load jsx files.
                query: {
                    presets: ['react', 'es2015'] // compile react and es2015. Babel needs these presets.
                },
                test: /\.jsx?$/, // want to get the extension filename.
                exclude: /(node_modules|bower_components)/ // Choose which folders to exclude from running through webpack
            }
        ]
    },
    devtool: 'inline-source-map'
};
