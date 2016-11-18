angular.module('directives')
	.directive('sidebar', function() {
		return {
			restrict: 'E',
			templateUrl:'sidebar.html',
			controller : function($location) {
				this.isActive = function(route) {
			        return route === $location.path();
			    }
			},
			controllerAs: 'sidebar'
		};
	});