'use strict';

const fs = require('fs');

const contents = fs.readFileSync('filetest.txt', 'utf8');

console.log(contents);