define(["components/Body/Body"], function(body) {
	return body
})
// define(["components/Body/Body"], function(body) {
// 	return body
// })
// define(["dom", "bind", "socket", "components/Modal/ModalView", "components/Modal/ModalBGLayout", "components/Body/BodyView", "components/Chat/ChatView"],
// 	function(dom, bind, socket, modal, bg, body, chat) {	
// 		socket = bind.setDependencies(socket);
// 		var	body = dom.getView(body);
// 		body.append(dom.getView(modal));
// 		if (modal.methods.init) {
// 			modal.methods.init();
// 		}
// 		body.append(dom.getView(bg));
// 		body.append(dom.getView(chat));
// 		if (chat.methods.init) {
// 			chat.methods.init();
// 		}
// 		return body
// 	}
// )

// define(["dom", "components/Modal/ModalView", "components/Modal/ModalBGLayout", "components/Body/BodyView"],
// 	function(dom, modal, bg, body) {	
// 		var	body = dom.getView(body)
// 		body.append(dom.getView(modal));
// 		body.append(dom.getView(bg));
// 		return body
// 	}
// )