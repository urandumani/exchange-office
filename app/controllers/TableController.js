(function (){
	var app = angular.module("exchangeOffice");

	var TableController = function($scope, $route) {
		$scope.$route = $route;
	};

	app.controller("TableController", ["$scope", "$route", TableController]);
}());