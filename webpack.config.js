const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

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
        path: path.resolve(__dirname, './dist/'),
        // Webpack will always output a js.
        filename: 'assets/js/[name].js'
    },
    devServer: {
        // Set where the server will serve assets from/similar to public_html/.
        contentBase: path.resolve(__dirname, './dist/'),
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
        port: 9000,
        // Allows pages to load exactly when routing to multiple pages
        historyApiFallback: true,
        watchOptions: { 
            aggregateTimeout: 300,
            poll: 1000 
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pug/index.pug',
        }),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    end_with_newline: true,
                    indent_size: 2,
                    indent_with_tabs: true,
                    indent_inner_html: true,
                    preserve_newlines: true,
                    unformatted: ['p', 'i', 'b', 'span']
                }
            },
            replace: [' type="text/javascript"']
        }),
        // Extracts the main.css
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
            chunkFilename: '[id].css',
        }),
        // Copies the Image folder to destination
        new CopyPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, './src/assets/img'), 
                    to: path.resolve(__dirname, './dist/assets/img'),
                },
            ],
            options: {
                concurrency: 100,
            },
        }),
    ],
    module: {
        rules: [
            { 
                // Handles the processing of PUG files
                test: /\.pug$/,
                use: ["pug-loader"]
            },
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
                        cacheDirectory: true,
                        presets: 
                            [
                                // For normal ES6 Cross-compatibility Support
                                '@babel/preset-env', 
                                // For React Support
                                '@babel/preset-react'
                            ],
                    },
                },
            },
        ],
    },
}