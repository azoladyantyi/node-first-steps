module.exports = function(name){
    return 'Hello, ' + name;
}
//import the greet module that is in the current folder
const greet = require('./greet');

console.log(greet('Xola'))
