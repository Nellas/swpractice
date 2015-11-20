var app = angular.module('swapp').controller('vehicleCtrl', function($scope, $routeParams, mainService) {

    $scope.getVehicleData = function() {
        mainService.getVehicleData()
            .then(function(result) {
                $scope.vehicleData = result;
                console.log('From the controller', result)
            })
    };

    $scope.getVehicleData();

});