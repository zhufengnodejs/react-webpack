class Plugin{
	apply(compiler) {
		compiler.hooks.entryOption.tap('Plugin',(option) => {
			console.log('emit');
		});
	}
}
module.exports=Plugin;