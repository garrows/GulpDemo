var counter = 0;

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
    },

    overrideGreeting : function(greeting) {
        Greeter.prototype.greeting = greeting;
    },

    count : function() {
        counter++;
        console.log("The count is " + counter);
    }
}

module.exports = Greeter;
