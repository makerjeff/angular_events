var app = angular.module ("myAppName", ['ngRoute']);  //ngRoute is named in the angular-route.js file

//configure app
app.config(['$routeProvider', function($routeProvider) {
    //when someone navigates to view...
    $routeProvider.when('/view', {
        templateUrl:'partials/view.html',
        controller:'ViewController'
    });

    $routeProvider.when('/local', {
        templateUrl:'partials/local_storage.html',
        controller:'LocalStorageController'
    });

    $routeProvider.otherwise( {
        redirectTo: '/view'
    });
}]);

//create a local storage controller

//create a controller for view
app.controller('ViewController', ['$scope', function($scope) {

    //vanilla JS array of objects
    var technologies = [
        {name:"C#", likes: 0, dislikes: 0},
        {name:"ASP.NET", likes: 0, dislikes: 0},
        {name:"SQL", likes: 0, dislikes: 0},
        {name:"AngularJS", likes: 0, dislikes: 0}
    ];

    //inject 'technologies' object into scope (sort of)
    $scope.technologies = technologies;

    //function to increment likes
    $scope.incrementLikes = function(technology) {
        technology.likes++;
    };

    $scope.decrementLikes = function(technology) {
        technology.likes--;
    }

    $scope.incrementDislikes = function(technology) {
        technology.dislikes++;
    };


}]);