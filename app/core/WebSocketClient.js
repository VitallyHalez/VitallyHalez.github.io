define([], function() {
	//var socket = new WebSocket('wss://jamboapp.herokuapp.com')
	var socket = new WebSocket('ws://localhost:8081');
	return {
		messages: {
			"SocketSend": {
				"direction": "subscribe"	
			},
			"SocketResponse": {
				"direction": "publish"	
			}
		},
		attributes: {
			socket: {
				value: socket
			}
		},
		methods: {
			init: function() {
				var socket = this.get("socket");
				socket.onmessage = this.onSocketMessage;
			},
			onSocketMessage: function(data) {
				modulemsg.methods.publish("SocketResponse", data, this);
			},
			registerMessages: function() {
				modulemsg.methods.subscribe("SocketSend", this.send, this);
			},
			send: function(data) {
				var socket = this.get("socket");
				if (socket.readyState === 1) {
					socket.send(data)
				}
			},
			callParent: function(base, newFunc) {
				if (newFunc && base) {
					base.apply(base, arguments);
					return base
				} else if (newFunc) {
					return newFunc
				}
			},
			onerror: function(event) {
				console.error(event);
			},
		}
	}
})
//ovveride
// var a = function(){ return 1; }
// var base = a;
// a = function() {
//   var originalResult = base.apply(base, arguments);
//   return originalResult + 1;
// };






			// init: function(handlers, scope) {
			// 	var socket = this.get("socket");
			// 	if (handlers) {
			// 		if (handlers.onmessage) {
			// 			socket.onmessage = this.onmessage(event, handlers.onmessage);
			// 		}
			// 		if (handlers.onopen) {
			// 			socket.onopen = this.onopen(event, handlers.onopen);
			// 		}
			// 	} 
			// },
			// onmessage: function(event, handler) {
			// 	var base = this.onmessage;
			// 	if (handler) {
			// 		base.apply(base, arguments);
			// 		handler(JSON.parse(event.data));
			// 	}
			// },
			// onopen: function(event, handler) {
			// 	var base = this.onmessage;
			// 	if (handler) {
			// 		base.apply(base, arguments);
			// 		handler(JSON.parse(event.data));
			// 	}
			// },
			// onerror: function(event) {
			// 	console.error(event);
			// },
			// send: function(data) {
			// 	var socket = this.get("socket");
			// 	if (socket.readyState === 1) {
			// 		socket.send(data)
			// 	}
			// }