(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/glen/Dropbox/Documents/SPEECH/Gulp/1/app/js/fake_7f4fcf25.js":[function(require,module,exports){
var thecatapi = require('thecatapi');

var cat = new thecatapi({target:'catDiv'});


window.addEventListener('load', function() {
	document.getElementById("outDiv").innerText = "1";
}, false);

},{"thecatapi":"/home/glen/Dropbox/Documents/SPEECH/Gulp/1/node_modules/thecatapi/index.js"}],"/home/glen/Dropbox/Documents/SPEECH/Gulp/1/node_modules/thecatapi/index.js":[function(require,module,exports){

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
},{}]},{},["/home/glen/Dropbox/Documents/SPEECH/Gulp/1/app/js/fake_7f4fcf25.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9nbGVuL0Ryb3Bib3gvRG9jdW1lbnRzL1NQRUVDSC9HdWxwLzEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvZ2xlbi9Ecm9wYm94L0RvY3VtZW50cy9TUEVFQ0gvR3VscC8xL2FwcC9qcy9mYWtlXzdmNGZjZjI1LmpzIiwiL2hvbWUvZ2xlbi9Ecm9wYm94L0RvY3VtZW50cy9TUEVFQ0gvR3VscC8xL25vZGVfbW9kdWxlcy90aGVjYXRhcGkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgdGhlY2F0YXBpID0gcmVxdWlyZSgndGhlY2F0YXBpJyk7XG5cbnZhciBjYXQgPSBuZXcgdGhlY2F0YXBpKHt0YXJnZXQ6J2NhdERpdid9KTtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dERpdlwiKS5pbm5lclRleHQgPSBcIjFcIjtcbn0sIGZhbHNlKTtcbiIsIlxuZnVuY3Rpb24gVGhlQ2F0QXBpKG9wdGlvbnMpIHtcblx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdHNlbGYub3B0aW9ucyA9IG9wdGlvbnM7XG5cblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKSB7XG5cdFx0c2VsZi5yZWFkeSgpO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLnJlYWR5KCk7XG5cdFx0fSwgZmFsc2UpO1x0XHRcblx0fVxufVxuXG5UaGVDYXRBcGkucHJvdG90eXBlLnJlYWR5ID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0YXJnZXQgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy50YXJnZXQpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLnRhcmdldCkgOiBkb2N1bWVudC5ib2R5O1xuXG5cdHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoaHR0cDovL3RoZWNhdGFwaS5jb20vYXBpL2ltYWdlcy9nZXQ/Zm9ybWF0PXNyYykgbm8tcmVwZWF0XCI7XG5cdHRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMTAwJVwiO1xuXHR0YXJnZXQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcblxuXHRpZiAodGFyZ2V0LnRhZ05hbWUgPT0gXCJESVZcIiAmJiB0YXJnZXQuc3R5bGUuaGVpZ2h0ID09PSBcIlwiKSB7XG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1x0XHRcblx0fVxuXHRcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFRoZUNhdEFwaTsiXX0=
