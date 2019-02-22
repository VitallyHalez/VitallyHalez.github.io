define([], function () {
	return {
		methods: {
			init: function() {
				this.loadModule("components/Chat/Chat")
				this.loadModule("components/Menu/Menu")
			},
			destroy: function() {
				this.unloadModule("components/Body/Body");
			},
			loadCollection: function() {

			},
			reload: function() {

			}
		}
	}
})