define(["core"], function(core) {
	return {
		// Внимание плохо читабельный код!!!
		// Он тут для того, что бы привязать к "Ноде" действие и не только.
		// Работает путем перебора свойств ноды, и поиском в ней признака "Привязать к ...", и привязывает к методу
		
		setDependencies: function(config) {
			// Если в конфиге объявлены методы, выполняется привязка методов "ядра",
			// Методам "ядра" привязывается контекст, всего конфига
			// Так как эти методы обрабатывают и представление и атрибуты
			if (!config.methods) {
				config.methods = {};
			}
			// if (!config.messages) {
			// 	config.messages= {}
			// }
			for(var key in core.methods) {
				config.methods[key] = core.methods[key].bind(config);
				config[key] = core.methods[key].bind(config);
			}
			// for(var key in core.messages) {
			// 	config.messages[key] = core.messages[key]
			// }
			// Присваивает объектам представления атрибуты, функции(пример по нажатию ...)
			if (config && config.view && (config.methods || config.attributes)) {
				config.view.forEach(function(node) {
					for (var key in node) {
						var toId = node[key].bindTo;
						if(toId && config.methods[toId]) {
							if (core.methods[toId]) {
								node[key] = config.methods[toId].bind(config);
							}
							else {
								node[key] = config.methods[toId].bind(config.methods);
							}
						}
						else if(toId && config.attributes[toId]) {
							var atr = config.attributes[toId];
							if (atr.method) {
								node[key] = config.methods[atr.method].bind(config.methods)();
							}
							else {
								node[key] = atr.value;
								if (!node.id) {
									node.id = core.methods.newId();
								}
								var isBind = {
									id:  node.id,
									property: key
								}
								if (atr.isBind) {
									atr.isBind.push(isBind)
								} 
								else {
									atr.isBind = [isBind] 
								} 
							} 
						}
					}
				});
			} 
			return config;
		}
	}
});
		//test version
		// setDependenciestest: function(config) {
		//     if (!config || !config.view || !config.methods) 
		//         return config;
			
		//     config.view.forEach(function(node) {
		//         for (var key in node) {
		//             if (!node[key].bindTo) 
		//                 continue; 
					
		//             var toId = node[key].bindTo;

		//             if (config.methods) {
		//                 var toValue = config.methods[toId];
		//                 if (toValue) {
		//                     node[key] = toValue.bind(config.methods);
		//                 }
		//             }
		//             if (config.attributes) {
		//                 var toValue = config.attributes[toId] 
		//                 if (toValue && toValue.method) {
		//                     node[key] = config.methods[toValue.method]();
		//                 }
		//                 else if (toValue &&  toValue.value) {
		//                     node[key] = toValue.value;
		//                 } 
		//             }
		//         }
		//     })
		//     for(var key in core.methods) {
		//         //core.methods[key].bind(config)
		//         config.methods[key] = core.methods[key].bind(config)
		//     }
		//     //config.methods = Object.assign(config.methods, core.methods);
		//     return config;
		// },
	// setDependencies: function(config) {
		//  var needBind = []
		//  config.view.forEach(function(node) {
		//      for (var key in node) {
		//          if (node[key].bindTo) {
		//              needBind.push({
		//                  node: node,
		//                  key: key
		//              })
		//          }
		//      }
		//  })
		//  needBind.forEach(function(obj) {
		//      if (config.methods[obj.key]) {
		//          obj.node[obj.key] = config.methods[obj.key].bind(config.methods)
		//      }
		//      else if (config.attributes[obj.key]) {
		//          if(config.attributes[obj.key].value) {
		//              obj.node[obj.key] = config.attributes[obj.key].value
		//          }
					// else if (config.attributes[obj.key].method) {
					//  obj.node[obj.key] = config.attributes[obj.key].method()
					// }
		//      } 
		//  })
		//  return config;
		// },
			//} //else console.warn("Please check you config, methods or view is not defined. Returned based config");