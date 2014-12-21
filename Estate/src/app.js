var App = App || {};

(function (App) {

  	App.mainModule = angular.module('store', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/', {
            templateUrl: 'src/templates/main.html',
            controller: 'MainController'
        }).
        otherwise({
            redirectTo: '/'
        });

	}]);	

})(App);
