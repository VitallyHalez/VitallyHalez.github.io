define(["./BodyView", "./BodyViewModel"], function(view, viewModel) {
	var config = {
		id: "Body",
		renderTo: "body",
		viewModel: viewModel,
		view: view
	}
	return Builder.build(config);
})