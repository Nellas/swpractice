var app = angular.module('swapp').service('mainService', function($http, $q){

    this.getCharData = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://swapi.co/api/people/'
        }).then(function(data) {
                var results = (data.data.results);
                console.log(results);
                dfd.resolve(results);
            });

        return dfd.promise;
    };

    this.getPlanetData = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://swapi.co/api/planets/'
        })
            .then(function(data) {
                var results = data.data.results;
                console.log(results);
                dfd.resolve(results);
            });
        return dfd.promise;
    };

    this.getShipData = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://swapi.co/api/starships/'
        })
            .then(function(data) {
                var results = data.data.results;
                console.log(results);
                dfd.resolve(results);
            });
        return dfd.promise;
    }


});

