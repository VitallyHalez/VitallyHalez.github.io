define(["dom"], function(dom) {
	function mergeMessages(base, updated) {
        if (base && updated) {
            for (var key in base) {
                if (!updated[key]) {
                    updated[key] = base[key]
                }
            }
        } 
    }
	function registerMessages(component) {
		if (component.messages) {
			var messages = modulemsg.get("Messages");
			var mergedMessages = Object.assign(messages, component.messages);
			modulemsg.set("Messages", mergedMessages);
			if (component.methods.registerMessages) {
				component.methods.registerMessages();
			}
		}

	}
	window.Builder = {
		buildHelper: function(config, scope) {
			var component = dom.setDependencies(config);
			if (component.methods.init) {
				component.methods.init();
			}
			registerMessages(component);
			return component; 
		},
		build: function(config, scope) {
			if (!config.viewModel || !config.view) {
				console.error("В компоненте не определена модель либо модель представления, проверьте конфигурацию.")
				return;
			}
			var component = dom.merge(config.viewModel, config.view);
			var view = dom.getView(component);
			if (view) {
				document.body.append(view)
			}
			if (component.methods.init) {
				component.methods.init();
			}
			registerMessages(component);
			return component;
		}, 
		destroy: function(config) {
			return dom.getView(config);
		}
	}
})
// buildHelper: function(config, scope) {
// 			var view = dom.getView(config.view);
// 			if (view) {
// 				document.body.append(view)
// 			}
// 			return config.view
// 		},