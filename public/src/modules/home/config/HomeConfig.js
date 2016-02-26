define(function() {

  'use strict';

  var HomeConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'src/modules/home/views/index.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm'
    });
  };

  HomeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  return HomeConfig;
});
