const critical = require('critical');

function CriticalCssPlugin() {
  this.options = {
    inline: true,
    base: 'build/',
    destFolder: 'build',
    minify: true,
    ignore: ['font-face', /\@import/],
    width: 1300,
    height: 900,
  };
}

CriticalCssPlugin.prototype.generate = function(data, callback) {
  let options = Object.assign(this.options, {
    html: data.html,
    dest: 'index.html',
    css: ['build/ssr-build' + data.assets.css[0]],
  });
  critical.generate(this.options, (err, output) => {
    data.html = output;
    callback(null, data);
  });
};

CriticalCssPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', compilation => {
    compilation.plugin(
      'html-webpack-plugin-after-html-processing',
      (htmlPluginData, callback) => {
        this.generate(htmlPluginData, callback);
      }
    );
  });
};

module.exports = CriticalCssPlugin;
