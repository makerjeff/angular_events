//local storage controller
app.controller('LocalStorageController', ['$scope', function($scope) {

    var key1 = 'app_data';

    var bins = [
        {type:'bolt', units:2},
        {type:'nut', units:5},
        {type:'bearing', units:10},
        {type:'washer', units: 20}
    ];

    $scope.bins = bins;


    //increase

    $scope.IncreaseStock = function(index, stock) {

        stock = stock +1;
        bins[index].units = stock;
        console.log( 'increase ' + index + ' units: ' + bins[index].units);

    }
    //decrease

    $scope.DecreaseStock = function(index, stock) {
        bins[index].units = stock;
        console.log( 'decreasing ' + index);


    }

}]);

// === HELPER FUNCTIONS ===
//

//store local data
function StoreData(key, dataArray) {
    localStorage.setItem(key, JSON.stringify(dataArray));
}

//retreive local data
function RetrieveData(key) {
    return JSON.parse(localStorage.getItem(key));

}