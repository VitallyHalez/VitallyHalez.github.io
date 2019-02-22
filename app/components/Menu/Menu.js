define(["./MenuView", "./MenuViewModel"], function(view, viewModel) {
	var config = {
		id: "Menu",
		renderTo: "body",
		viewModel: viewModel,
		view: view
	}
	return Builder.build(config);
})