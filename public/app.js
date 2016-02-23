define([

  'angular',
  'src/config/namespace',
  'src/modules/index/IndexCtrl',
  'src/config/vendor'
], function (angular, namespace, IndexCtrl) {

  'use strict';

  var app = angular.module(namespace, [
    'finangle.vendor'
  ]);
  app.controller('IndexCtrl', IndexCtrl);

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/index');

      $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'src/modules/index/view.html',
        controller: 'IndexCtrl',
        controllerAs: 'vm'
      });
    }
  ]);

  function _init() {
    angular.element(document).ready(function() {
      angular.bootstrap(document, [namespace]);
    });
  }

  return {
    init: _init
  };
});
