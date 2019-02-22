define(["components/ModalBG/ModalBG"], function (bg) {
	return {
		attributes: {
			"Date": {
				type: "Core.Date",
				//Есть готовая функция по приведению к нужному виду
				value: new Date().toString();
			},
			"Text": {
				type: "Core.String",
				value: "Test"
			},
			"isMessageHidden": {
				type: "Core.Boolean",
				value: false
			}
		},
		methods: {
			
		},
		view: [
			{
				operation: "insert",
				name: "message",
				node: "li",
				classList: "list-group-item bg-dark border-info",
				hidden: { bindTo: "isMessageHidden" },
				container: "main"
			},
			{
				operation: "insert",
				name: "date",
				node: "small",
				classList: "text-secondary",
				innerText: {bindTo: "Date"},
				parentContainer: "main"
			},
			{
				operation: "insert",
				name:  "text",
				node: "p",
				innerText: {bindTo: "Text"},
				parentContainer: "main",
			}
		]
	}
})