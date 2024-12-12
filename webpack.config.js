const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Set to 'production' for production build
    entry: './src/index.js', // Entry point for your app (adjust to your entry file)

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    resolve: {
        alias: {
            // Alias react-native to react-native-web for web
            'react-native$': 'react-native-web',
            // Ensure that components like Touchable are resolved to web equivalents
            'react-native-svg': 'react-native-web-svg',
        },
        extensions: ['.web.js', '.js', '.json', '.jsx', '.tsx', '.ts'],
    },

    module: {
        rules: [
            // Babel loader for JS/JSX files
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', 'babel-preset-react-native'],
                    },
                },
            },
            // Style loader for CSS or other styles (optional if using styles)
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Support for loading images (optional)
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    devServer: {
        static: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
        historyApiFallback: true, // Ensure that React Router works properly
        port: 3000, // Port to run the web server on
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Path to your HTML template
        }),
    ],
};
