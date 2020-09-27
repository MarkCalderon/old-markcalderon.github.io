const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: "development",
    // Watch if there are any changes in directory.
    // Required: To include source map for browser debugging.
    devtool: 'source-map',
    // Files that you want to process.
    entry: [
        "./src/assets/scss/main.scss",
        "./src/core/Index.js"
    ],
    // Set the build output directory
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        // Webpack will always output a js.
        filename: 'js/[name].js'
    },
    devServer: {
        // Set where the server will serve assets from/similar to public_html/.
        contentBase: path.resolve(__dirname, 'dist'),
        // Compress assets using gzip compression.
        compress: true,
        // Show logs on Dev Tools.
        inline: true,
        // Hot Module Replacement: Loads changes dynamically without reloading page.
        hot: true,
        // Observes if there are any changes on the contentBase path.
        watchContentBase: true,
        // Opens a browser, after successfull build.
        open: true,
        // Sets where the assets are served from.
        publicPath: '/assets/',
        // Server Port
        port: 9000
    },
    module: {
        rules: [
            {
                // Handles the processing of SASS/SCSS files
                test: /\.scss$/,
                use: [
                    // Extract and save the final CSS.
                    MiniCssExtractPlugin.loader,
                    // Load the CSS, set url = false to prevent following urls to fonts and images.
                    {
                        loader: "css-loader", 
                        options: { 
                            url: false, 
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    // Add browser prefixes and minify CSS.
                    { loader: 'postcss-loader', options: { 
                        sourceMap: true,
                        postcssOptions: {
                            plugins: [
                                [
                                    require('postcss-preset-env')(
                                    {
                                    // Options
                                    }),
                                ],
                                [
                                    // Minify CSS
                                    require('cssnano')(
                                    {
                                        sourceMap: true,
                                        preset: ['default', {
                                            // Custom Options
                                        }]
                                    }),
                                ],
                            ],
                        },
                    },},
                    // Load the SCSS/SASS
                    { 
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                // Handles the processing of JS files
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 
                            [
                                // For normal ES6 Cross-compatibility Support
                                '@babel/preset-env', 
                                // For React Support
                                '@babel/preset-react'
                            ],
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },
    plugins: [
        // Extracts the main.css
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'src/assets/img'), 
                    to: path.resolve(__dirname, 'dist/assets/img'),
                },
            ],
        }),
    ],
}