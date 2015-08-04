var app = angular.module('swapp').controller('shipCtrl', function($scope, $routeParams, mainService){

    $scope.getShipData = function() {
        mainService.getShipData()
            .then(function(result) {
                $scope.shipData = result;
            })
    };

    $scope.getShipData();


});