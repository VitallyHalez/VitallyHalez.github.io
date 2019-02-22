define(["./ChatView", "./ChatViewModel"], function(view, viewModel) {
	var config = {
		id: "Chat",
		renderTo: "body",
		viewModel: viewModel,
		view: view
	}
	return Builder.build(config);
})