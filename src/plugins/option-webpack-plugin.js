class Plugin{
	apply(compiler) {
		compiler.hooks.entryOption.tap('Plugin',(option) => {
			console.log('run-webpack-plugin');
		});
	}
}
module.exports=Plugin;