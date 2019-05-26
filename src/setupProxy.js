const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(proxy(process.env.REACT_APP_MAILCHIMP_ROUTE, {target: "https://us17.api.mailchimp.com/"}));
};