define(["bind"], function(bind) {
    var dom =  {
        merge: function(base, updated) {
            if (!updated || !base) {
                console.error("Не был передан один или несколько из требуемых параметров")
                return updated;
            }
            if (base.methods) {
                if (updated.methods) {
                    mergeObj(base.methods && updated.methods)
                } 
                else if (!updated.methods) {
                    updated.methods = jQuery.extend(true, {}, base.methods);
                }
            }
            if (base.attributes) {
                if (updated.attributes) {
                    mergeObj(base.attributes && updated.attributes)
                } 
                else if (!updated.attributes) {
                    updated.attributes = jQuery.extend(true, {}, base.attributes);
                }
            }
            if (updated.view) {
                updated.view = mergeviews(updated.view, base.view);
            }
            return updated;
        },
    	getView: function (config) {
    		if (config && config.view) {
                var main = config.view.find(x => x.container && !x.parentContainer);
                if (main.dom) {
                    return main.dom
                }
                if (!main.id) {
                    main.id = newId();
                }
                //Необходимо привязать методы перед созданием готовых эллементов
                config = bind.setDependencies(config);
    			
    			config.view.forEach(function(item) {
    				while (true) {
                        if (!item.id) {
                            item.id = newId();
                        }
    					var childs = config.view.filter(function(child) {
                            if (item.container) {
    						    return child.parentContainer == item.container;
                            }
    					});
						if (!item.dom) {
							item.dom = createNode(item);
						}
						childs.forEach(function(child) {
                            if (!child.id) {
                                child.id = newId();
                            }
                            if (!child.dom) {
    						    child.dom = createNode(child);  
                            }
    						item.dom.append(child.dom);
						});
					
    					return false;
    				}
    			});
    			return main.dom;
    		}
    	},
    	createNode: createNode
    }
    function newId() {
        var text = "i";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    function cloneObj(obj) {
        var n = {}
        for (var key in obj) {
            n[key] = obj[key]
        }
        return n
    }
    
    function mergeObj(baseObj, updatedObj) {
        if (baseObj && updatedObj) {
            for (var key in baseObj) {
                if (!updatedObj[key]) {
                    updatedObj[key] = baseObj[key]
                }
            }
        } 
    }
    // TODO #0002 Создать "сетку", в нутри эллементов, 
    // что бы упорядочить их,
    // не в зависимости от расположения в объекте
    function mergeviews(updatedView, baseview) {
        baseview.forEach(function (item) {
            var isItemUpdated = updatedView.find(x=>x.name == item.name)
            //Клонируем объект, так как если передать итем в массив, мы просто передадим ссылку
            if(!isItemUpdated) {
                updatedView.push(jQuery.extend(true, {}, item))
            }
        })

        updatedView.forEach(function(item) {
            if (item.operation == "merge") {
                var b = baseview.find(x=>x.name == item.name)
                for (var key in b) {
                    if (!item[key]) {
                        item[key] = b[key]
                    }
                }
            }
        })

        return updatedView
    }
    function setNodeGridMask(grid) {
        var classList = " ";
        classList += grid.col ? "offset-" + grid.col : "";
        classList += grid.span ? " col-" + grid.span : "";
        return classList;
    }
    function createNode(config) {
		if (config.node && config.operation != "remove") {
	        var n = document.createElement(config.node);
	        for (var key in config) {
	        	n[key] = config[key]
			}
            if(n["classList"] && config.grid) {
                n.classList += setNodeGridMask(config.grid)
            }
			return n;
	    }
	    else if (!config.node && config.operation != "remove") 
            console.error("Не указано имя dom-элемента, проверьте конфигурацию")
	}
    return dom
});