'use strict'

angular.module( 'ericruisApp', [
  'ngCookies'
  'ngResource'
  'ngSanitize'
  'ngRoute'
]).config ($routeProvider)-> 
  $routeProvider.when '/', 
    templateUrl: 'views/main.html'
    controller: 'MainCtrl'
  .otherwise
    redirectTo: '/'


