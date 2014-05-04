console.log("Init"); //Only run once.

function Greeter(target) {
    console.log("Constructor"); //Run every 'new Greeter()'
    if (target) {
        this.target = target;
    }
}

Greeter.prototype = {

    greeting: "Hello",
    target: "World",

    greet : function() {
        console.log(this.greeting + " " + this.target + "!");
    }
}

module.exports = Greeter;
