'use strict';


// Declare app level module which depends on filters, and services
angular.module('caleb', [
	'ngRoute',
	'ngAnimate',
	'hj.imagesLoaded',
	'caleb.filters',
	'caleb.services',
	'caleb.directives',
	'caleb.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode({enabled: true, requireBase: false});

	$routeProvider
	.when('/', {templateUrl: 'views/me.html', controller: 'meCtrl'})
	.when('/work', {templateUrl: 'views/work.html', controller: 'workCtrl'})
	.when('/workwith', {templateUrl: 'views/workwith.html', controller: 'workWithCtrl'})
	.otherwise({redirectTo: '/view1/404.html'});
}]);