var app = angular.module('swapp').controller('speciesCtrl', function($scope, $routeParams, mainService) {

    $scope.getSpeciesData = function() {
        mainService.getSpeciesData()
            .then(function(response) {
                $scope.speciesData = response;
                console.log('From the Controller', response)
            })
    };

    $scope.getSpeciesData();

});