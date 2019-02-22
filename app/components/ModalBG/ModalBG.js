define(["./ModalBGView", "./ModalBGViewModel"], function(view, viewModel) {
	var config = {
		renderTo: "body",
		viewModel: viewModel,
		view: view
	}
	return Builder.build(config);
})