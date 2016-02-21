var app = angular.module('app', []);

app.controller('MainCtrl', function($scope, $http){
	$http.get('/location')
		.success(function($scope, response) {
			$scope.location.title = response.responseObject.title;
			$scope.location.description = response.responseObject.description;
			$scope.location.url = response.responseObject.description;
		});
		.error(function(data){
			console.log('Error: ' + data);
		});
};

app.config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: '',
        v: '3',
        libraries: ''
    });
});

app.controller('MainCtrl', function ($scope, uiGmapGoogleMapApi, uiGmapIsReady) {

    uiGmapGoogleMapApi.then(function (maps) {
        $scope.googlemap = {};
        $scope.map = {
            center: {
                latitude: $scope.latitude,
                longitude: $scope.longitude
            };
            zoom: 5,
            pan: 1,
            options: $scope.mapOptions,
            control: {},
            events: {
                tilesloaded: function (maps, eventName, args) {},
                dragend: function (maps, eventName, args) {},
                zoom_changed: function (maps, eventName, args) {}
            }
        };
    });

uiGmapIsReady.promise() // if no value is put in promise() it defaults to promise(1)
    .then(function (instances) {
        console.log(instances[0].map); // get the current map
    })
        .then(function () {
        $scope.addMarkerClickFunction($scope.markers);
    });

$scope.markers = [{
        id: 0,
        coords: {
            latitude: $scope.latitude;
            longitude: $scope.longitude;
        },
        data: //news?
    }];

$scope.addMarkerClickFunction = function (markersArray) {
        angular.forEach(markersArray, function (value, key) {
            value.onClick = function () {
                $scope.onClick(value.data);
                $scope.MapOptions.markers.selected = value;
            };
        });
    };

$scope.MapOptions = {
        minZoom: 3,
        zoomControl: false,
        draggable: true,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        disableDoubleClickZoom: false,
        keyboardShortcuts: true,
        markers: {
            selected: {}
        },
        styles: [{
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
    };

