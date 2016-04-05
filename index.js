function WebpackCombinePlugin(options) {
    this.sources = options.sources;
    this.file = options.file;
}

WebpackCombinePlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, done) {
        var contents = "";
        var assets = this.assets;

        for (var i = 0; i < assets.length; i++) {
            if (compilation.assets[assets[i]]) {
                contents = contents + compilation.assets[assets[i]].source();
            }else{
                compilation.errors.push('CombinePlugin: Cannot find the asset ' + assets[i] + ' in the compilation assets.');
            }
        }

        compilation.assets[this.file] = {
            source: function() {
                return contents;
            },
            size: function() {
                return contents.length;
            }
        };

        done();
    }.bind(this));
};

module.exports = WebpackCombinePlugin;