requirejs.config({
  	baseUrl: './app',
  	deps: ['init'],
  	paths: {
//	Core
  		core: 'core/core',
		bind: 'core/bind',
		dom: 'core/dom',
		Builder: "core/Builder",
		socket: "core/WebSocketClient",
		modulemsg: "core/ModuleMessages"
  	},
});