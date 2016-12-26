var fs = require('fs'),
	origJs = require.extensions['.js'],
	babel   = require('babel-core');

require.extensions['.js'] = function (module, filename) {
	if (filename.indexOf('node_modules') >= 0) {
		return (origJs || require.extensions['.js'])(module, filename);
	}

	var content  = fs.readFileSync(filename, 'utf-8');

	var compiled = babel.transform(content, {
		presets: ['es2015', 'react']
	}).code;

	return module._compile(compiled, filename);
}