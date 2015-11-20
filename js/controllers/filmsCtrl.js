var app = angular.module('swapp').controller('filmsCtrl', function($scope, $routeParams, mainService){

    $scope.getFilmsData = function() {
        mainService.getFilmsData()
            .then(function(result) {
                $scope.filmData = result;
                console.log('From Controller', result);
            })
    };

    $scope.getFilmsData()


});