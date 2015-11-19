var app = angular.module('swapp', ['ngRoute']).config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/templates/homeTemplate.html',
            controller: 'mainCtrl'
        })

        .when('/films', {
            templateUrl: '/templates/filmsTemplate.html'
            controller: 'filmsCtrl'
        })

        .when('/characters', {
            templateUrl: '/templates/characterTemplate.html',
            controller: 'characterCtrl'
        })

        .when('/planets', {
            templateUrl: '/templates/planetTemplate.html',
            controller: 'planetCtrl'
        })

        .when('species', {
            templateUrl: '/templates/speciesTemplate.html',
            controller: 'speciesCtrl'
        })

        .when('/ships', {
            templateUrl: '/templates/shipTemplate.html',
            controller: 'shipCtrl'
        })

        .when('vehicles', {
            templateUrl: '/templates/vehiclesTemplate.html',
            controller: 'vehicleCtrl'
        })

        .otherwise({
            redirectTo: '/'
        })
});

