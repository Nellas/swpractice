var app = angular.module('swapp', ['ngRoute']).config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/templates/homeTemplate.html',
            controller: 'mainCtrl'
        })

        .when('/characters', {
            templateUrl: '/templates/characterTemplate.html',
            controller: 'characterCtrl'
        })

        .when('/planets', {
            templateUrl: '/templates/planetTemplate.html',
            controller: 'planetCtrl'
        })

        .when('/ships', {
            templateUrl: '/templates/shipTemplate.html',
            controller: 'shipCtrl'
        })

        .otherwise({
            redirectTo: '/'
        })
});

