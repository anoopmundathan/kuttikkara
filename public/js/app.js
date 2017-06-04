'use strict';

var Kuttikara = (function() {

	function animateMenu() {
		var hamburger = document.querySelector('.header-hamburger-icon');
		var slideMenu = document.querySelector('.slidemenu');
		var container = document.querySelector('#main-container');
		var toggle = false;
		
		hamburger.addEventListener('click', function() {
			toggle = !toggle;
			
			if (toggle) {
				slideMenu.style.transform = ("translate(0,0)");
				container.style.transform = ("translate(250px, 0)");
			} else {
				slideMenu.style.transform = ("translate(-200%,0)");
				container.style.transform = ("translate(0, 0)");
			}
		});	
	}

	return {
		animateMenu: animateMenu
	}
})();

Kuttikara.animateMenu();
