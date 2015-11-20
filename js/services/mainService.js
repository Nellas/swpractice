var app = angular.module('swapp').service('mainService', function($http, $q){

    this.getCharData = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://swapi.co/api/people/'
        }).then(function(data) {
                var results = (data.data.results);
                console.log('From Service', results);
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
    };

    this.getFilmsData = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://swapi.co/api/films/'
        })
            .then(function(data) {
                var results = data.data.results;
                console.log('From Service', results);
                dfd.resolve(results);
            });
        return dfd.promise;
    };

    this.getVehicleData = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://swapi.co/api/vehicles/'
        })
            .then(function(data) {
                var results = data.data.results;
                console.log('From the Service', results);
                dfd.resolve(results);
            });
        return dfd.promise;
    };

    this.getSpeciesData = function() {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://swapi.co/api/species/'
        })
            .then(function(data) {
                var results = data.data.results;
                console.log('From the Service', results)
                dfd.resolve(results);
            });
        return dfd.promise;
    }
});

