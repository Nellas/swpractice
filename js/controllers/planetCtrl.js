var app = angular.module('swapp').controller('planetCtrl', function($scope, $routeParams, mainService){

    $scope.getPlanetData = function() {
        mainService.getPlanetData()
            .then(function(result) {
                $scope.planetData = result;
            })
    };

    $scope.getPlanetData();


});