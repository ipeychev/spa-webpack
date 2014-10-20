'use strict';

(function () {
	var debounce = require('./debounce');

	console.log(debounce);

	var el = document.getElementById('dynContent');

	el.innerHTML = '<h2>Dynamic content from Page 1</h2>';
}());