define([], function () {
	return {
		attributes: {
			"isFieldHidden": {
				type: "Core.Boolean",
				value: true
			},
			"CellsCollection": {
				type: "Core.Collection",
				itemType: "CellsView",
				value: []
			}
		},
		methods: {
			
		},
		view: [
			{
				operation: "insert",
				id: "field",
				name: "field",
				node: "div",
				classList: "container",
				hidden: { bindTo: "isFieldHidden" },
				container: "main",
				items: {
					collection: {bindTo: "CellsCollection"}
				}
			}
		]
	}
})
 // <div class="progress" id="progress">
 //    <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="100"
 //      aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
 //  </div>
 //  <div class="text-center">
 //    <h3 id="result" class="text-warning"></h3>
 //  </div>
// <div id="field" class="container">
//     <div id="c0-0" class="box"></div>
//     <div id="c0-1" class="box"></div>
//     <div id="c0-2" class="box"></div>
//     <div id="c0-3" class="box"></div>
//     <div id="c0-4" class="box"></div>
//     <div id="c1-0" class="box"></div>
//     <div id="c1-1" class="box"></div>
//     <div id="c1-2" class="box"></div>
//     <div id="c1-3" class="box"></div>
//     <div id="c1-4" class="box"></div>
//     <div id="c2-0" class="box"></div>
//     <div id="c2-1" class="box"></div>
//     <div id="c2-2" class="box"></div>
//     <div id="c2-3" class="box"></div>
//     <div id="c2-4" class="box"></div>
//     <div id="c3-0" class="box"></div>
//     <div id="c3-1" class="box"></div>
//     <div id="c3-2" class="box"></div>
//     <div id="c3-3" class="box"></div>
//     <div id="c3-4" class="box"></div>
//     <div id="c4-0" class="box"></div>
//     <div id="c4-1" class="box"></div>
//     <div id="c4-2" class="box"></div>
//     <div id="c4-3" class="box"></div>
//     <div id="c4-4" class="box"></div>
//   </div>