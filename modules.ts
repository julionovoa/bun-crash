import path from 'path';
// const path = require('path');

const filepath = path.join('this', 'is', 'a', 'path', 'myfilename.png');
const filename = path.basename(filepath);
console.log(filename); // myfilename.png