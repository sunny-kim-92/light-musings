const path = require('path');

module.exports = {
  siteTitle: `Light Musings`,
  siteTitleShort: `LM`,
  siteDescription: `Musings in blog form, often supported with data, always supported with kindness`,
  siteUrl: `https://light-musings.netlify.com`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
