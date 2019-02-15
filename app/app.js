define(["dom", "base/appBody", "base/menu", "base/leftPanel", "main/MainSection", "modal/modal", "modal/bgModal"], 
function(dom, appBody, menu, leftPanel, page, modal, bgModal) {	
	// Приставка n обозначает, что это нода(готовый дом элемент)
	var	appBody = dom.getView(appBody)
	// Загрузка главного меню
	appBody.append(dom.getView(menu));
	appBody.append(dom.getView(page));
	if (page.methods.init) {
		page.methods.init();
	}
	appBody.append(dom.getView(modal));
	appBody.append(dom.getView(bgModal));
	
	//document.body.append(dom.getView(leftPanel));
	return appBody
})