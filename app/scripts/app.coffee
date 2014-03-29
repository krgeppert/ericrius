'use strict'

angular.module( 'ericruisApp', [
  'ngCookies'
  'ngResource'
  'ngSanitize'
  'ngRoute'
]).config ($routeProvider)-> 
  $routeProvider.when '/', 
    templateUrl: 'views/sphere.html'
    controller: 'SphereCtrl'
  .when '/instructor/:instructorId',
    templateUrl: 'views/instructor.html'
    controller: 'InstructorCtrl'
  .otherwise
    redirectTo: '/'


