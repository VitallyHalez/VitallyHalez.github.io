define([], function () {
	return {
		id: "Chat",
		attributes: {
			"Title": {
				type: "Core.String",
				value: "Чат с опонентом"
			},
			"MessageToSend": {
				type: "Core.String",
				value: ""
			},
			"CloseChatButtonCaption": {
				value: "Закрыть"
			},
			"MessageCollection": {
				type: "Core.Collection",
				itemType: "MessageView",
				value: []
			},
			"InpmsgPlaceholder": {
				type: "Core.String",
				value: "Введите ваше сообщение"
			},
			"SendButtonCaption": {
				type: "Core.String",
				value: "Отправить"
			},
			"isChatHidden": {
				type: "Core.Boolean",
				value: true
			},
			"isButtonOkHidden": {
				type: "Core.Boolean",
				value: false
			},
			"MessageCounterHidden": {
				type: "Core.Boolean",
				value: true
			},
			"MessageNotReadCount": {
				type: "Core.Integer",
				value: 0
			},
			"CloseBtnStyleList": {
				value: "float: right; "
			},
			"HeaderStyleList": {
				value: "padding: 0px; "
			}
		},
		methods: {
			onChangeVisibleMessage: function(data) {
				this.set("isChatHidden", !this.get("isChatHidden"));
			},
			toogle: function() {
				var isHidden = this.get("isChatHidden");
				this.set("isChatHidden", !isHidden);
				this.set("MessageNotReadCount", 0);
				//this.set("MessageCounterHidden", true);
			},
		},
		view: [
			{
				operation: "insert",
				id: "Chat",
				name: "chat",
				node: "div",
				classList: "card text-warning bg-dark m-base",
				hidden: { bindTo: "isChatHidden" },
				container: "main"
			},
			{
				operation: "insert",
				name: "chat-body",
				node: "div",
				classList: "card-body",
				parentContainer: "main",
				container: "chat-body"
			},
			{
				operation: "insert",
				name:  "allmsg",
				node: "ul",
				classList: "list-group",
				parentContainer: "chat-body",
				container: "allmsg",
				items: {
					collection: {bindTo: "MessageCollection"}
				}
			},
			{
				operation: "insert",
				name:  "modal-header",
				node: "li",
				classList: "list-group-item bg-dark border-info text-secondary",
				parentContainer: "allmsg",
				container: "modal-header",
				style: {bindTo: "HeaderStyleList"},
				innerText: { bindTo: "Title" }
			},
			{
				operation: "insert",
				name: "closeBtn",
				node: "button",
				classList: "btn btn-outline-info",
				parentContainer: "modal-header",
				innerText: {bindTo: "CloseChatButtonCaption"},
				style: {bindTo: "CloseBtnStyleList"},
				onclick: {bindTo: "toogle"}
			},
			{
				operation: "insert",
				name: "chat-footer",
				node: "div",
				classList: "card-footer",
				parentContainer: "main",
				container: "chat-footer"
			},
			{
				operation: "insert",
				name: "chat-input-group",
				node: "div",
				classList: "input-group",
				parentContainer: "chat-footer",
				container: "chat-input-group"
			},
			{
				operation: "insert",
				name: "inpmsg",
				node: "input",
				type: "text",
				classList: "form-control border-info bg-dark text-warning",
				parentContainer: "chat-input-group",
				value: {bindTo: "MessageToSend"},
				placeholder: {bindTo: "InpmsgPlaceholder"}
			},
			{
				operation: "insert",
				name: "chat-input-group-append",
				node: "div",
				classList: "input-group-append",
				parentContainer: "chat-input-group",
				container: "chat-input-group-append"
			},
			{
				operation: "insert",
				name: "msgBtn",
				node: "button",
				classList: "btn btn-outline-info",
				parentContainer: "chat-input-group-append",
				innerText: {bindTo: "SendButtonCaption"},
				onclick: {bindTo: "send"}
			}
		]
	}
})