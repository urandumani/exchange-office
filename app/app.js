(function() {
	var app = angular.module('exchangeOffice', ['directives', 'ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/form', {
				templateUrl: 'form.html',
				controller: 'FormController',
				activetab: 'form'
			})
			.when('/sales', {
				templateUrl: 'table.html',
				controller: 'TableController',
				activetab: 'sales'
			})
			.when('/purchases', {
				templateUrl: 'table.html',
				controller: 'TableController',
				activetab: 'purchases'
			})
			.otherwise({redirectTo: '/form'});
	});
}());