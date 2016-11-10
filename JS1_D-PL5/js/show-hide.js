'use strict';
(function(){
	var actionBar = document.getElementById('actionBar');
	var secret = document.getElementById('secret');
	var buttons = actionBar.getElementsByTagName('button');
	var toggleButton = buttons[0];
	var showButton = buttons[1];
	var hideButton = buttons[2];

	function toogleClassback(){
		secret.classList.toggle('invisible');
	}

	function show(){
		secret.classList.remove('invisible');
	}

	function hide(){
		secret.classList.add('invisible');
	}

	toggleButton.addEventListener('click',toogleClassback);
	showButton.addEventListener('mouseenter',show);
	hideButton.addEventListener('mouseenter',hide);

})();