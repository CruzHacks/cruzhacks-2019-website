const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/3.0/**', {
        target: 'https://us17.api.mailchimp.com',
        logLevel: 'debug',
        changeOrigin: true
    }));
};