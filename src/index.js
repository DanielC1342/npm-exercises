function sayHello() {
    console.log("bing bang bong");
}
sayHello();
const msg = require('./say-hello.js');
console.log(msg.output);