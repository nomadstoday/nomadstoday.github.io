var Module1 = (function () {
	
	var init = function(containerId) {
		var container = document.getElementById(containerId);
		container.innerHTML = `<h6>This is a journey into sound!!!</h6>`;
	};
	
	return {
		init: init
	};
}());