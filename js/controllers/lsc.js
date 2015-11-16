//local storage controller
app.controller('LocalStorageController', ['$scope', function($scope) {

    var key = 'app_data';

    var bins = [
        {type:'bolt', units:2},
        {type:'nut', units:5},
        {type:'bearing', units:10},
        {type:'washer', units: 20}

    ];



    $scope.bins = bins;


    //scoped functions
    $scope.StoreInfo = function(index, item, value) {
        console.log(index + ': ' + item + ':' + value);
    };

    //decrease

    $scope.DecreaseStock = function(index, stock) {
        bins[index].units = stock;
    }
    //increase

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