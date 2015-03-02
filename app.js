var newspaper = angular.module('newspaper', ['ui.router']);

newspaper.config(function($stateProvider) {
  $stateProvider.state('beats', {
    url: '',
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.reporter', {
    url: '/:reporterId',
    templateUrl: "partials/beats.reporter.html",
    controller: 'BeatsCtrl',
  });

  $stateProvider.state('beats.addBeat', {
    url: '/addBeat',
    templateUrl: "partials/beats.addBeat.html",
    controller: 'BeatsCtrl',
  });




});
