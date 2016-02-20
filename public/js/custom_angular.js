var app = angular.module('app', []);

app.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: '',
        v: '3',
        libraries: 'weather,geometry,visualization'
    });
});

function mainController($scope, $http){
	$http.get('/location')
		.success(function($scope) {
			$scope.SanFran{
				title: 
				description:
				siteURL:
			}
		})
		.error(function(data){
			console.log('Error: ' + data);
		})
}