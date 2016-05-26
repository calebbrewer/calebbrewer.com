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
		
		$scope.imgLoadedEvents = {

			always: function(instance) {
				// Do stuff
			},
			done: function(instance) {
				angular.element(instance.elements[0]).addClass('background-loaded');
				console.log(instance);
			},
			fail: function(instance) {
				// Do stuff
			}
		};					
	}])	
	.controller('meCtrl', ['$scope', function($scope) {
		$scope.$parent.page = 'me';
	}])
	.controller('workCtrl', ['$scope', function($scope) {
		$scope.$parent.page = 'work';
		
		$scope.clients = [
			{
				name: 'MapleTronics',
				projects: [
					{
						title: 'mapletronics.com',
						images: [],
						url: 'mapletronics.com',
						tags: ['web design', 'graphic design', 'programing', 'front end']	
					},
					{
						title: 'MapleTronics Business Cards',
						images: [
							{title: '', alt: 'MapleTronics Business Cards', url: ''}
						],
						tags: ['business cards', 'graphic design', 'layout']
					}
				]
			}	
		];
	}])
	.controller('workWithCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.$parent.page = 'work-with';
        
        $scope.submit = function() {
            var message = {
                name: $scope.name,
                email: $scope.email,
                body: $scope.msg
            };
            
            $http({method: 'POST', url: 'https://yvz2gs7n8h.execute-api.us-east-1.amazonaws.com/v1/message', data: message, headers: {'Content-Type': 'application/json'}}).then(function successCallback(response) {
               $scope.thanks = true;
               console.log("You just sent me this message. Thanks! Oh and I'm glad your looking at my Code.", response.data);             
			},
            function errorCallback(response) {
                console.log('error', response);
			});
        };
	}]);	