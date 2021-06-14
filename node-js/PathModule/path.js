const path  = require('path');

// console.log(path.dirname("D:/Nodejs-youtube/PathModule/path.js"));
// console.log(path.extname("D:/Nodejs-youtube/PathModule/path.js"));
// console.log(path.basename("D:/Nodejs-youtube/PathModule/path.js"));

const myPath  = path.parse("D:/Nodejs-youtube/PathModule/path.js");
console.log(myPath.name);