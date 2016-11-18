(function (){
	var app = angular.module("exchangeOffice");

	var FormController = function($scope, $route) {
		$scope.$route = $route;
	};

	app.controller("FormController", ["$scope", "$route", FormController]);
}());