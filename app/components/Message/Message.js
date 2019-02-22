define(["./MessageView"], function(view) {
	var config = {
		renderTo: "body",
		//viewModel: require("components/Chat/ChatViewModel"),
		view: view
	}
	return Builder.build(config);
})