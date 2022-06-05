const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.TEST === undefined
        ? "https://martinssturainis.herokuapp.com" 
        : "http://localhost:3000",
      changeOrigin: true,
    })
  );
};