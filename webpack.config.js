const path = require('path');
const fs = require('fs');

// App directory
const appDirectory = fs.realpathSync(process.cwd());
// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    // Set build type
    mode: 'development',
    // Serve the compiled index-dist file.
    entry: resolveAppPath('dist/_assets/js/main.js'),
    devServer: {
        // Serve index.html as the base
        contentBase: resolveAppPath('dist'),
        // Public path is root of content base
        publicPath: '/',
        // Open Default browser upon successful loading, Prepos is loading, so false.
        open: false,
        // Compress in GZIP format
        compress: true,
        // Hot Module Replacement, Automatically reloads browser when modifications are made.
        hot: true,
        port: 4000,
        // Allows server to fallback to contentBase (React Initial load upon set URL path)
        historyApiFallback: true,
    },
}