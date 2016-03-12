'use strict';

/* Directives */

angular.module('caleb.directives', []).
	directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}]).
	directive('setFocus', function($timeout) {
		return {
			link: function(scope, element, attrs) {
				scope.$watch(attrs.setFocus, function(value) {
					if(value === true) { 
						$timeout(function() {
							element[0].focus();
							scope[attrs.setFocus] = false;
						});
					}
				});
			}
		};
	});	