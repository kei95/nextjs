// next.config.js
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withImages();

module.exports = withPlugins([[optimizedImages, {}]]);

module.exports = {
  swcMinify: true,
};
