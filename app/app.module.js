'use strict';

// Define the `phonecatApp` module
angular
  .module('phonecatApp', [
    'ngRoute',
    'phoneDetail',
    'phoneList'
  ])
  .config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
      $locationProvider.html5Mode({
        enabled: true,
      });

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);

