define([], function () {
	return {
		messages: {
			"SocketSend": {
				"direction": "publish"	
			},
			"SocketResponse": {
				"direction": "subscribe"	
			}
		},
		methods: {
			newId: function() {
                var text = "i";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 5; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            },
            //TODO
			redirect: function(section) {
				require(["dom", section], function(dom, section) {
					var el = document.querySelector("#section");
					el.replaceWith(dom.getView(section));
				})
			},
			get: function(id) {
				var attribute = this.attributes[id];
				if (attribute) {
					if (attribute.method) {
						return attribute.method();
					}
					if (attribute.isBind) {
						var binded = attribute.isBind[0] 
						if (binded) {
							var el = document.getElementById(binded.id);
							if (el) {
								var value = el[binded.property];
								if (value) {
									return value;
								}
							}
						}
					}
					return attribute.value;
				}
			},
			set: function(id, value) {	
				var attribute = this.attributes[id]
				if (attribute) {
					attribute.value = value;
					if (attribute.isBind) {
						attribute.isBind.forEach(function(child) {
							if (child && child.id && child.property) {
								var el = document.getElementById(child.id);
								if (el) {
									el[child.property] = value;
								}
							}
						})
					}
					return;
				}
			
				console.error("Значение: " + id + ", не объявлено в атрибутах конфигурации")
			},
			showModal: function(config) {
				this.loadModule("./Modal/Modal");
			},
			closeModal: function() {
				this.unloadModule("./Modal/Modal");
			},
			loadModule: function(path, callback, scope) {
				//require([path], callback.bind(scope))
				if (!require.defined(path)) {
					if (!callback) {
						require([path], function(component) {
							return;
						});
					} else {
						require([path], callback.bind(this)(component));
					}
				} 
				/*else {
					var elId = require(path).id;
					if(elId) {
						var domEl = document.getElementById(elId);
						if (domEl.hidden) {
							domEl.hidden = false;
						}
					}
				}*/
			},
			unloadModule: function(path) {
				if (require.defined(path)) {
					var elId = require(path).id;
					if(elId) {
						var domEl = document.getElementById(elId);
						domEl.remove();
					}
					require.undef(path);
				}
				if (require.defined(path + "View")) {
					require.undef(path + "View");
				}
				if (require.defined(path + "ViewModel")) {
					require.undef(path + "ViewModel");
				}
			},
			publish: function(msgname, data, scope) {
				modulemsg.methods.publishData(msgname, data, scope);
			},
			subscribe: function(msgname, method, scope) {
				modulemsg.methods.subscribeData(msgname, method, scope);
			}
		}
	}
})