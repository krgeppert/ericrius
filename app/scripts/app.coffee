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
  .when '/instructor/:instructorId',
    templateUrl: 'views/instructor.html'
    controller: 'InstructorCtrl'
  .otherwise
    redirectTo: '/'


