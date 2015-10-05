// samplepro angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.greeting = "Hello World!";
  $scope.showTitle = true;
  $scope.projects = projects;
  $scope.apps = apps;
});
