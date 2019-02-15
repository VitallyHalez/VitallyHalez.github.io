requirejs.config({
  	baseUrl: './app',
  	deps: ['init'],
  	paths: {
//	Core
  		core: 'core/core',
		bind: 'core/bind',
		dom: 'core/dom',
//	Pages
		base: 'model/base/',
		login: 'model/login/',
		main: 'model/main/',
		contacts: 'model/contacts/',
		record: 'model/record/record',
//	Module
		modal: 'model/modal',
  	},
});