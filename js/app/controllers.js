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
		
		$scope.projects = [
			/*
			{
				title: 'MapleTronics Website',
				client: 'MapleTronics',
				images: [],
				src: 'mapletronics.com',
				tags: ['web design', 'graphic design', 'programing', 'front end']	
			},
			{
				title: 'MapleTronics Business Cards',
				client: 'MapleTronics',
				images: [
					{title: '', alt: 'MapleTronics Business Cards', src: ''}
				],
				tags: ['business cards', 'graphic design', 'layout']
			},
			*/
			{
				title: 'MapleTronics Car Wrap Design',
				client: 'MapleTronics',
				images: [
					{title: '', alt: 'MapleTronics Versa Design Image 1', src: 'mapletronics-car-wrap1.jpg'},
					{title: '', alt: 'MapleTronics Versa Design Image 2', src: 'mapletronics-car-wrap2.jpg'},
					{title: '', alt: 'MapleTronics Versa Design Image 1', src: 'mapletronics-car-wrap3.jpg'},
					{title: '', alt: 'MapleTronics Versa Design Image 2', src: 'mapletronics-car-wrap4.jpg'}					
				],
				discription: "It was pretty intimidating laying out something of this scale, but by photographing the car and tracing the body lines I was able to show the client and the printshop exactly what the car should and would look like.",
				tags: ['car wraps', 'graphic design', 'layout']
			},
			{
				title: 'Antebellum Sweet Black Tea Bottle Label',
				client: 'Antebellum Tea',
				images: [
					{title: '', alt: 'Antebellum Sweet Black Tea Bottle Label Design', src: 'antebellum-sweet-black-tea1.jpg'},				
				],
				discription: "This was a fun project and a great beverage. Check out antebellumsweetblacktea.com and get a taste of the south.",
				tags: ['labels', 'graphic design']
			},
			{
				title: 'TaylorMade Adventures Logo',
				client: 'TaylorMade Adventures',
				images: [
					{title: '', alt: 'TaylorMade Adventures Logo', src: 'taylormade-adventures1.jpg'},				
				],
				tags: ['labels', 'graphic design']
			}									
		];
		
		$scope.showInfo = function(project) {
			$scope.popup = {
				show: true,
				title: project.title,
				body: project.discription
			}
		};
	}])
	.controller('workWithCtrl', ['$scope', '$http', function($scope, $http) {
		$scope.$parent.page = 'work-with';
        
        $scope.submit = function() {
            var message = {
                name: $scope.name,
                email: $scope.email,
                body: $scope.msg
            };
            
            $http({method: 'POST', src: 'https://yvz2gs7n8h.execute-api.us-east-1.amazonaws.com/v1/message', data: message, headers: {'Content-Type': 'application/json'}}).then(function successCallback(response) {
               $scope.thanks = true;
               console.log("You just sent me this message. Thanks! Oh and I'm glad your looking at my Code.", response.data);             
			},
            function errorCallback(response) {
                console.log('error', response);
			});
        };
	}]);	