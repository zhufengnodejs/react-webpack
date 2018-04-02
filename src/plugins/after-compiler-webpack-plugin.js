class Plugin{
	apply(compiler) {
		compiler.hooks.entryOption.tap('Plugin',(option) => {
			console.log('after compiler');
		});
	}
}
module.exports=Plugin;