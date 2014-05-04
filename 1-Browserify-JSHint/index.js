
var thecatapi = require('thecatapi');

var cat = new thecatapi({target:'catDiv'});


window.addEventListener('load', function() {

    document.getElementById("outDiv").innerText = "Test 1";

}, false);
