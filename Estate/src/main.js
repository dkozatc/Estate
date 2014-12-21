require.config({
	paths : {
		'angular' : '../lib/angular.min',
		'app' : 'app',
		'main' : 'controllers/mainController'
	},

	shime : {
		'angular' : {
			exports : 'angular'
		},
		'app' : ['angular'],
		'main' : ['app']
	}
});

require(['main'], function (MainController) {

	console.log(this);
})