define([], function () {
	return {
		id: "Menu",
		messages:  {
			"MessageCountUpdated": {
				"direction": "subscribe"
			},
			"ChangeVisible": {
				"direction": "publish"	
			}
		},
		attributes: {
			"MenuButtonCaption": {
				type: "Core.String",
				value: "MENU"
			},
			"RestartButtonCaption": {
				type: "Core.String",
				value: "RESTART"
			},
			"RedoButtonCaption": {
				type: "Core.String",
				value: "REDO"
			},
			"ChatButtonCaption": {
				type: "Core.String",
				value: "CHAT"
			},
			"isMenuHidden": {
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
		},
		methods: {
			registerMessages: function() {
				this.subscribe("MessageCountUpdated", this.onCounterMessagesChanged, this);
			},
			onCounterMessagesChanged: function(count) {
				this.set("MessageNotReadCount", count);
				if (count > 0) {
					this.set("MessageCounterHidden", false)
				}
			},
			onMenuButtonClick: function() {

			},
			onRestartButtonClick: function() {

			},
			onRedoButtonClick: function() {

			},
			onChatButtonClick: function() {
				var path = "components/Chat/Chat";
				if (!require.defined(path)) {
					this.loadModule(path);
				} else {
					this.publish("ChangeVisible", true, this);
					this.set("MessageCounterHidden", true);
				}
			}
		},
		view: [
			{
				operation: "insert",
				id: "Menu",
				name: "Menu",
				node: "nav",
				classList: "navbar navbar-light navbar-expand-lg fixed-bottom",
				style: "background-color: #292929;",
				hidden: { bindTo: "isMenuHidden" },
				container: "main"
			},
			{
				operation: "insert",
				name: "toogler",
				node: "button",
				classList: "navbar-toggler",
				type: "button",
				"data-toggle": "collapse",
				"data-target": "#navMenu",
				container: "toogler",
				parentContainer: "main"
			},
			{
				operation: "insert",
				name: "toggler-icon",
				node: "span",
				classList: "navbar-toggler-icon",
				parentContainer: "toogler"
			},
			{
				operation: "insert",
				id: "navMenu",
				name: "collapse",
				node: "div",
				classList: "collapse navbar-collapse",
				parentContainer: "main",
				container: "collapse"
			},
			{
				operation: "insert",
				name: "btn-list",
				node: "ul",
				classList: "navbar-nav mr-auto",
				style: "width: 100%",
				parentContainer: "collapse",
				container: "btn-list"
			},
			{
				operation: "insert",
				name: "MenuButton",
				node: "button",
				classList: "btn btn-warning btn-lg",
				innerText: {bindTo: "MenuButtonCaption"},
				onclick: {bindTo: "onMenuButtonClick"},
				parentContainer: "btn-list",
			},
			{
				operation: "insert",
				name: "RestartButton",
				node: "button",
				classList: "btn btn-outline-warning btn-lg",
				innerText: {bindTo: "RestartButtonCaption"},
				onclick: {bindTo: "onRestartButtonClick"},
				parentContainer: "btn-list",
			},
			{
				operation: "insert",
				name: "RedoButton",
				node: "button",
				classList: "btn btn-outline-danger btn-lg disabled",
				innerText: {bindTo: "RedoButtonCaption"},
				onclick: {bindTo: "onRedoButtonClick"},
				parentContainer: "btn-list",
			},
			{
				operation: "insert",
				name: "ChatButton",
				node: "button",
				classList: "btn btn-outline-success btn-lg",
				innerText: {bindTo: "ChatButtonCaption"},
				onclick: {bindTo: "onChatButtonClick"},
				parentContainer: "btn-list",
				container: "ChatButton"
			},
			{
				operation: "insert",
			    id: "MessageCounter",
				name: "MessageCounter",
			    node: "span",
			    parentContainer: "ChatButton",
			    classList: "badge badge-success",
			    innerText: {bindTo: "MessageNotReadCount"},
			   	hidden: {bindTo: "MessageCounterHidden"}
			}
		]
	}
})