define(["components/ModalBG/ModalBG"], function(bg) {
	return {
		attributes: {
			"name": {
				value: "modal-base"
			},
			"header": {
				value: "Уведомление"
			},
			"body": {
				value: "Body"
			},
			"footer": {
				value: ""
			},
			"isModalHidden": {
				value: true
			},
			"isHeaderHidden": {
				value: true
			},
			"isBodyHidden": {
				value: false
			},
			"isFooterHidden": {
				value: false
			},
			"isButtonOkHidden": {
				value: false
			}
		},
		methods: {
			onmessage: function(data) {
				
			},
			init: function(value) {
				if (value && value instanceof Object) {
					for (var key in value) {
						if (this.get(key)) {
							this.set(key, value[key]);
						}
					}
				}
				else {
					if (this.get("body") && value) {
						this.set("body", value);
					}
				}
				// var handlers = {
				// 	onmessage: this.onmessage
				// }
				// socket.methods.init(handlers, this);
			},
			destroy: function() {
				requirejs.undef("components/Modal/ModalView");
				requirejs.undef("components/Modal/ModalBGLayout");
			},
			toogle: function() {
				bg.methods.toogle();
				
				var isHidden = this.get("isModalHidden");
				this.set("isModalHidden", !isHidden);
			}
		},
		view: [
			{
				operation: "insert",
				name:  { bindTo: "name" },
				node: "div",
				classList: "card m-base",
				hidden: { bindTo: "isModalHidden" },
				container: "main"
			},
			{
				operation: "insert",
				name:  "modal-header",
				node: "div",
				classList: "card-header bg-info text-white m-header",
				parentContainer: "main",
				hidden: { bindTo: "isHeaderHidden" },
				innerText: { bindTo: "header" }
			},
			{
				operation: "insert",
				name:  "modal-body",
				node: "div",
				classList: "card-body m-body",
				parentContainer: "main",
				hidden: { bindTo: "isBodyHidden" },
				innerText: { bindTo: "body" }
			},
			{
				operation: "insert",
				name:  "modal-footer",
				node: "div",
				classList: "card-footer m-footer bg-white",
				container: "footer",
				parentContainer: "main",
				hidden: { bindTo: "isFooterHidden" },
				innerText: { bindTo: "footer" }
			},
			{
				operation: "insert",
				name:  "modal-ok",
				node: "button",
				classList: "btn btn-outline-info",
				parentContainer: "footer",
				hidden: { bindTo: "isButtonOkHidden" },
				innerText: "Ok",
				onclick: { bindTo: "toogle" }
			}
		]
	}
})