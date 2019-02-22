define([], function () {
	return {
		messages: {
			"MessageCountUpdated": {
				"direction": "publish"
			},
			"ChangeVisible": {
				"direction": "subscribe"	
			}
		},
		methods: {
			init: function() {
				return;
			},
			registerMessages: function() {
				this.subscribe("SocketResponse", this.onMessage, this);
				this.subscribe("ChangeVisible", this.onChangeVisibleMessage, this)
			},
			onMessage: function(message) {
				message = JSON.parse(message.data);
				if (!message || !message.data || !message.data.method) {
			        return;
			    }
			    this[message.data.method](message.data);
			},
			onChatMessage: function(data) {
			    if (this.get("isChatHidden")) {
			    	var notReadCount = +this.get("MessageNotReadCount") + 1;
			    	this.set("MessageNotReadCount", notReadCount);
			    	this.changeCounterNotReadMessage(notReadCount);
			    } else {
			    	this.set("MessageNotReadCount", 0);
			    	this.renderMessage(data.msg);
			    }
			},
			send: function() {
				var message = this.get("MessageToSend")
				if (!message) {
					return;
				}
				this.renderMessage(message);
				var data = {
					msg: message, 
					method:'onChatMessage'
				};
				this.publish("SocketSend", JSON.stringify(data), this);
				
				this.set("MessageToSend", "");
			},
			renderMessage: function(message) {
				var date = new Date();
			    var dateFormated = this.formatDate(date);
			    var messageCollection = this.get("MessageCollection") ? this.get("MessageCollection") : [];
			    messageCollection.push({
			    	text: message,
			    	date: dateFormated
			    })
			},
			formatDate: function(date) {
				var dateFormated = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:`;
			    if (date.getMinutes() < 10) {
			        dateFormated += `0${date.getMinutes()}`;
			    } else {
			        dateFormated += `${date.getMinutes()}`;
			    }
			    return dateFormated;
			},
			changeCounterNotReadMessage: function(count) {
				this.publish("MessageCountUpdated", count, this)
			},
			destroy: function() {
				this.unloadModule("components/Chat/Chat");
			},
			loadCollection: function() {
				return;
			},
			reload: function() {
				return;
			}
		}
	}
})