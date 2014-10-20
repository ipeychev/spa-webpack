'use strict';

import debounce from './debounce';

console.log(debounce);

var el = document.getElementById('dynContent');

el.innerHTML = '<h2>Dynamic content from Page 2</h2>';