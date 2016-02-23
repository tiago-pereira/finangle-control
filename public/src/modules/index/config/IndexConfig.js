define(function() {

  'use strict';

  var IndexConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
      url: '/index',
      templateUrl: 'src/modules/index/views/index.html',
      controller: 'IndexCtrl',
      controllerAs: 'vm'
    });
  };

  IndexConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  return IndexConfig;
});
