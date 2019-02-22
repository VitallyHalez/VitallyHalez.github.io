require(["Builder", "socket", "modulemsg"], function(Builder, socket, modulemsg) {
	//document.body.append(app)
	window.modulemsg = this.Builder.buildHelper(modulemsg);
	this.Builder.buildHelper(socket);
	window.socket = socket.get("socket");
	require(["app"], function(app) {
		return;
	})
})
// require(["Builder", "socket", "modulemsg", "app"], function(Builder, socket, modulemsg, app) {
// 	//document.body.append(app)
// 	window.modulemsg = this.Builder.buildHelper(modulemsg);
// 	this.Builder.buildHelper(socket);
// 	window.socket = socket.get("socket");
// 	this.Builder.build(app)
// })