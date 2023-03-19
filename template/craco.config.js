const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
};
