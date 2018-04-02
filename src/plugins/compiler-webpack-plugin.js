class Plugin{
	apply(compiler) {
		compiler.hooks.entryOption.tap('Plugin',(option) => {
			console.log('compiler');
		});
	}
}
module.exports=Plugin;