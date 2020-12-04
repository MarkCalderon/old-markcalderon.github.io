const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: "development",
    // Watch if there are any changes in directory.
    // Required: To include source map for browser debugging.
    devtool: 'source-map',
    // Files that you want to process.
    entry: [
        path.resolve(__dirname, 'src/assets/scss/main.scss'),
        path.resolve(__dirname, 'src/core/Index.js')
    ],
    // Set the build output directory
    output: {
        path: path.resolve(__dirname, 'dist/'),
        // Webpack will always output a js.
        filename: 'assets/js/[name].js'
    },
    devServer: {
        // Shows/ends process if there is error instead of skipping.
        overlay: true,
        // Shows errors instead of loading site
        stats: 'errors-only',
        // Watches assets file changes 
        // #watchContentBase: true, // (On by default)
        // Set where the server will serve assets from/similar to public_html/.
        // Set to SRC when serving for HOT (*Not suitable for Production)
        contentBase: path.resolve(__dirname, 'src/'),
        // Compress assets using gzip compression.
        compress: true,
        // Show logs on Dev Tools.
        inline: true,
        // Disables live reloading
        liveReload: false,
        // Hot Module Replacement: Loads changes dynamically without reloading page.
        hot: false, // (On by default)
        // Observes if there are any changes on the contentBase path.
        watchOptions: { 
            aggregateTimeout: 300,
            poll: 1000,
            ignored: '/node_modules/',
        },
        // Opens a browser, after successfull build.
        open: false,
        // Sets where the assets are served from.
        publicPath: '/',
        // Server Port
        port: 9000,
        // Allows pages to load exactly when routing to multiple pages
        historyApiFallback: true,
        // For CORs/ HEADER setting
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
    },
    plugins: [
        new BrowserSyncPlugin({
              host: 'localhost',
              port: 3100,
              proxy: 'http://localhost:9000/',
            },
            // plugin options
            {
              // prevent BrowserSync from reloading the page
              // and let Webpack Dev Server take care of this
            //   reload: false,
              injectChanges: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: false,
            template: path.resolve(__dirname, 'src/pug/index.pug'),
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
                    from: path.resolve(__dirname, 'src/assets/img'), 
                    to: path.resolve(__dirname, 'dist/assets/img'),
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
                    { 
                        loader: 'postcss-loader', options: { 
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