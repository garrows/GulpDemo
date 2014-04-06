(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/glen/Dropbox/Documents/SPEECH/Gulp/3/app/js/fake_d48026fc.js":[function(require,module,exports){

var thecatapi = require('thecatapi');

var cat = new thecatapi({target:'catDiv'});


window.addEventListener('load', function() {

	document.getElementById("outDiv").innerText = "Test 3";

}, false);

},{"thecatapi":"/home/glen/Dropbox/Documents/SPEECH/Gulp/3/node_modules/thecatapi/index.js"}],"/home/glen/Dropbox/Documents/SPEECH/Gulp/3/node_modules/thecatapi/index.js":[function(require,module,exports){

function TheCatApi(options) {
	var self = this;

	self.options = options;

	if (document.readyState == "complete") {
		self.ready();
	} else {
		window.addEventListener('load', function() {
			self.ready();
		}, false);		
	}
}

TheCatApi.prototype.ready = function() {
	var target = (this.options && this.options.target) ? document.getElementById(this.options.target) : document.body;

	target.style.background = "url(http://thecatapi.com/api/images/get?format=src) no-repeat";
	target.style.backgroundSize = "100%";
	target.style.backgroundPosition = "center";

	if (target.tagName == "DIV" && target.style.height === "") {
		target.style.height = "100%";		
	}
	
}


module.exports = TheCatApi;
},{}]},{},["/home/glen/Dropbox/Documents/SPEECH/Gulp/3/app/js/fake_d48026fc.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9nbGVuL0Ryb3Bib3gvRG9jdW1lbnRzL1NQRUVDSC9HdWxwLzMvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvZ2xlbi9Ecm9wYm94L0RvY3VtZW50cy9TUEVFQ0gvR3VscC8zL2FwcC9qcy9mYWtlX2Q0ODAyNmZjLmpzIiwiL2hvbWUvZ2xlbi9Ecm9wYm94L0RvY3VtZW50cy9TUEVFQ0gvR3VscC8zL25vZGVfbW9kdWxlcy90aGVjYXRhcGkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnZhciB0aGVjYXRhcGkgPSByZXF1aXJlKCd0aGVjYXRhcGknKTtcblxudmFyIGNhdCA9IG5ldyB0aGVjYXRhcGkoe3RhcmdldDonY2F0RGl2J30pO1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXREaXZcIikuaW5uZXJUZXh0ID0gXCJUZXN0IDNcIjtcblxufSwgZmFsc2UpO1xuIiwiXG5mdW5jdGlvbiBUaGVDYXRBcGkob3B0aW9ucykge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0c2VsZi5vcHRpb25zID0gb3B0aW9ucztcblxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBcImNvbXBsZXRlXCIpIHtcblx0XHRzZWxmLnJlYWR5KCk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdHNlbGYucmVhZHkoKTtcblx0XHR9LCBmYWxzZSk7XHRcdFxuXHR9XG59XG5cblRoZUNhdEFwaS5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRhcmdldCA9ICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLnRhcmdldCkgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm9wdGlvbnMudGFyZ2V0KSA6IGRvY3VtZW50LmJvZHk7XG5cblx0dGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcInVybChodHRwOi8vdGhlY2F0YXBpLmNvbS9hcGkvaW1hZ2VzL2dldD9mb3JtYXQ9c3JjKSBuby1yZXBlYXRcIjtcblx0dGFyZ2V0LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIxMDAlXCI7XG5cdHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcImNlbnRlclwiO1xuXG5cdGlmICh0YXJnZXQudGFnTmFtZSA9PSBcIkRJVlwiICYmIHRhcmdldC5zdHlsZS5oZWlnaHQgPT09IFwiXCIpIHtcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHRcdFxuXHR9XG5cdFxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gVGhlQ2F0QXBpOyJdfQ==
