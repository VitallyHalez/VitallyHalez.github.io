// Развернуть всю логику слияния конфигов, и не базовый конфиг апдейтить, 
// а к обновленому добавить логику базовой страницы.
// Таким образом по прототипу базового объекта можно будет создать несколько новых
// Везде где используется dom.js изменить передачу конфигов поменять местами
// Протестить записи после решения задачи

define(["bind"], function(bind) {
    var dom =  {
        merge: function(base, updated) {
            if (base && updated) {
                if (base.methods || updated.methods)
                    Object.assign(base.methods, updated.methods);
                if (base.attributes || updated.attributes)
                    Object.assign(base.attributes, updated.attributes);
                if (base.view)
                    base.view = mergeviews(base.view, updated.view);
            }

            else console.error("Не был передан один или несколько из требуемых параметров")
            return base;
        },
        getView: function (config) {
            if (config && config.view) {
                //Необходимо привязать методы перед созданием готовых эллементов
                config = bind.setDependencies(config);
                
                var main = config.view.find(x => x.container && !x.parentContainer);
                config.view.forEach(function(item) {
                    while (true) {
                        var childs = config.view.filter(function(child) {
                            return item.container && child.parentContainer == item.container;
                        });
                        if (!item.dom) {
                            item.dom = createNode(item);
                        }
                        childs.forEach(function(child) {
                            child.dom = createNode(child);
                            item.dom.append(child.dom);
                        });
                    
                        return false;
                    }
                });
                return main.dom;
            }
        },
        createNode: createNode,
        createIcon: createIcon
    }
    
    function createNode(config) {
        if (config.node) {
            var n = document.createElement(config.node);
            for (var key in config) {
                n[key] = config[key]
            }
            if (config.icon) {
                n.append(createIcon(config.icon));
            }
            return n;
        }
        else console.error("Не указано имя dom-элемента, проверьте конфигурацию dom-элемента")
    }

    function createIcon(icon) {
        var config = {
            node: "i",
            classList: "material-icons",
            innerText: icon
        }
        return createNode(config);
    }
    function mergeviews(baseview, updatedView) {
        updatedView.forEach(function(updatedItem) {
            if (updatedItem.name && updatedItem.operation == "merge") {
                var toMerge = baseview.find(x => x.name == updatedItem.name);
                for (var key in updatedItem) {
                    toMerge[key] = updatedItem[key];
                }
            } 
            else if (updatedItem.operation == "insert") {
                baseview.push(updatedItem);
            } 
            else if (updatedItem.name && updatedItem.operation == "remove") {
                baseview.splice(baseview.findIndex(x => x.name == updatedItem.name), 1);
            }
        });
        return baseview
    }

    return dom
});