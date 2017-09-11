const path = require('path');
const preactCliLodash = require('preact-cli-lodash');
const CriticalCssPlugin = require('./plugins/CriticalCssPlugin');

export default (config, env, helpers) => {
  if (!env.production) return config;

  preactCliLodash(config);

  let { plugin: SWPrecacheWebpackPlugin } =
    helpers.getPluginsByName(config, 'SWPrecacheWebpackPlugin')[0] || {};

  if (SWPrecacheWebpackPlugin) {
    SWPrecacheWebpackPlugin.options.runtimeCaching = [
      {
        urlPattern: /^https:\/\/fonts.googleapis.com\//,
        handler: 'cacheFirst',
      },
    ];
  }

  let { plugins } = config;
  plugins.push(new CriticalCssPlugin());
};
