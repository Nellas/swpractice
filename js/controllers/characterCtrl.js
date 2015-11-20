var app = angular.module('swapp').controller('characterCtrl', function($scope, $routeParams, mainService){

    $scope.getCharData = function() {
        mainService.getCharData()
            .then(function(result) {
                $scope.charData = result;
                console.log('From Controller', result);
            })
    };

    $scope.getCharData()


});