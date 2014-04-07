
var thecatapi = require('thecatapi');

var cat = new thecatapi({target:'catDiv'});



var gulpDemoApp = angular.module('gulpDemoApp', []);
 
gulpDemoApp.controller('GulpDemoCtrl', function ($scope) {
  $scope.version = 4;
  $scope.subtitle = function() {
  	return "Test " + $scope.version;
  }
});