angular.module('directives')
	.directive('sidebar', function(){
		return {
			restrict: 'E',
			templateUrl:'sidebar.html'
		};
	});