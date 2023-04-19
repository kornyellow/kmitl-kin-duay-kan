module.exports = function (api) {
	api.cache(true);
	return {
		plugins: ['macros', '@babel/plugin-syntax-jsx'],
	}
}