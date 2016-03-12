'use strict';

/* Controllers */

angular.module('caleb.controllers', []) 
	.controller('mainCtrl', ['$scope', '$route', '$window', '$rootScope', function($scope, $route, $window, $rootScope) {	
		//Break Points
		$scope.steps = function() {
			if($window.innerWidth > 1024){
				$scope.step0 = true;
				$scope.isMainNavOpen = false;
			}
			else {
				$scope.step0 = false;
			}			

			if($window.innerWidth <= 1024){
				$scope.step1 = true;
			}
			else {
				$scope.step1 = false;
			}
		};

		$scope.steps();

		angular.element(window).on('resize', function() {
			$scope.$apply(function() {
				$scope.steps();
			});	
		});

		//Reset some things on route change
		$scope.$on('$routeChangeSuccess', function(next, current) { 
		});			
	}])	
	.controller('meCtrl', ['$scope', function($scope) {
		$scope.$parent.page = 'me';
	}])
	.controller('workCtrl', ['$scope', function($scope) {
		$scope.$parent.page = 'work';
	}])
	.controller('workWithCtrl', ['$scope', function($scope) {
		$scope.$parent.page = 'work-with';
	}]);	