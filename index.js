function ClientJsWebpackPlugin(options) {
    this.sources = options.sources;
    this.file = options.file;
}

ClientJsWebpackPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation, done) {
        var contents = "";
        var sources = this.sources;

        for (i = 0; i < sources.length; i++) {
            if (compilation.assets[sources[i]]) {
                contents = contents + compilation.assets[sources[i]].source();
            }else{
                compilation.errors.push('CombinePlugin: Cannot find the file ' + sources[i] + ' in the compilation assets.');
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
}

module.exports = ClientJsWebpackPlugin;