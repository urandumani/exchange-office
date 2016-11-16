angular.module('directives', [])
	.directive('mainHeader', function(){
		return {
			restrict: 'E',
			templateUrl:'header.html'
		};
	});