define(["db"], function (db) {
	return {
		methods: {
			newId: function() {
                var text = "i";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 5; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            },
			loadSchema: function (config) {
				require(["record", "dom"], function(record, dom) {
					var collection = db.methods.get(config.schema)
					collection.forEach(function(dbRecord) {
						var section = document.querySelector("#section-body");

						//var newRecord = JSON.parse(JSON.stringify(record)); // Подходит для простых переменных
						var newRecord = jQuery.extend(true, {}, record)
						//newRecord.attributes.name.value = dbRecord.name

						section.append(dom.getView(newRecord));
						
						newRecord.methods.init(dbRecord);
					})
				})
			},
			redirect: function(section) {
				require(["dom", section], function(dom, section) {
					var el = document.querySelector("#section");
					el.replaceWith(dom.getView(section));
				})
			},
			get: function(id) {
				if (this.attributes[id]) {
					if (this.attributes[id].method) {
						return this.attributes[id].method()
					} 
					return this.attributes[id].value
				}
			},
			set: function(id, value) {	
				if (this.attributes[id]) {
					this.attributes[id].value = value;
					if (this.attributes[id].isBind) {
						this.attributes[id].isBind.forEach(function(child) {
							var el = document.querySelector("#" + child.id)
							el[child.property] = value
						})
					}
					return;
				}
			
				console.error("Значение: " + id + ", не объявлено в атрибутах конфигурации")
			},
			showModal: function(config) {
				require(["modal/modal"], function(modal) {
					modal.methods.init(config);
					modal.methods.toogle();
				})
			}
		}
	}
})
	// if (requirejs.defined(section)) {
				// 	return;
				// }
				// var sections = [
				// 	//"base/basesection",
				// 	"main/mainsection",
				// 	"login/loginsection",
				// 	"contacts/contactssection"
				// ]
				// sections.forEach(function(section) {
				// 	if (requirejs.defined(section)) {
				// 		requirejs.undef(section);
				// 	}
				// }) 

			// getold: function(id) {
			// 	for(var key in this.attributes) {
			// 		if (key == id) {
			// 			if (this.attributes[key].value) {
			// 				return this.attributes[key].value
			// 			} 
			// 			else if (this.attributes[key].method) {
			// 				return this.attributes[key].method()
			// 			} 
			// 			else {
			// 				return this.attributes[key]
			// 			} 
			// 		}
			// 	}
			// 	console.error("Значение: " + id + ", не объявлено в атрибутах конфигурации")
			// },