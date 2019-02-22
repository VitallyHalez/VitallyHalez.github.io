define([], function () {
	return {
		attributes: {
			"isModalBGHidden": {
				value: true
			}
		},
		methods: {
			toogle: function() {
				var isHidden = this.get("isModalBGHidden");
				this.set("isModalBGHidden", !isHidden);
			}
		},
		view: [
			{
				operation: "insert",
				name:  "bg",
				node: "div",
				classList: "m-bg",
				hidden: { bindTo: "isModalBGHidden" },
				container: "base"
			},
		]
	}
})