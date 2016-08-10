'use strict';

const fs = require('fs');

fs.readFile('filetest.txt', 'utf8', function (err, contents) {
	fs.writeFileSync('newfiletest.txt', contents);
});