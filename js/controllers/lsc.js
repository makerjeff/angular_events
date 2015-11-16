//local storage controller
app.controller('LocalStorageController', ['$scope', function($scope) {
    var bins = [
        {type:'bolt', units:2},
        {type:'nut', units:5},
        {type:'bearing', units:10},
        {type:'washer', units: 20}

    ];

    $scope.bins = bins;



    $scope.StoreInfo = function(data) {
        var value = data;
        console.log('storing ' +  value);
    };



}]);