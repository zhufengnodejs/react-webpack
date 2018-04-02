class Plugin{
	apply(compiler) {
		compiler.hooks.entryOption.tap('Plugin',(option) => {
			console.log('done');
		});
	}
}
module.exports=Plugin;