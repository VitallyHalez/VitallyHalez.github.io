define([], function(argument) {
	return {
		attributes: {
			Messages: {
				type: "Core.Object",
				value: {}
			},
			Subscribers: {
				type: "Core.Array",
				value: []
			}
		},
		methods: {
			init: function() {

			},
			publishData: function(msgname, data, scope) {
				if (!msgname || !data || !scope) {
					console.error("Не все параметры были переданы. Проверьте конфигурацию");
					return;
				}
				var msgs = this.get("Messages");
				if (msgs[msgname]) {
					var subscribers = this.get("Subscribers");
					subscribers.forEach(function(subscriber) {
						if (subscriber.msgname === msgname && subscriber.method) {
							subscriber.method(data);
						}
					})
				}
			},
			subscribeData: function(msgname, method, scope) {
				if (!msgname || !method || !scope) {
					console.error("Не все параметры были переданы. Проверьте конфигурацию");
					return;
				}
				var subscribers = this.get("Subscribers");
				var subscriber = {
					msgname: msgname,
					method: method.bind(scope)
				}
				subscribers.push(subscriber);
			}
		}		
	}	
})