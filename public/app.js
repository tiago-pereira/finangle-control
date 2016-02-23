define([
  'angular',
  'src/config/namespace',
  'src/modules/shared/shared.module',
  'src/modules/index/module',
  'src/modules/login/module',
  'src/config/vendor'
], function(angular, namespace) {

  'use strict';

  var app = angular.module(namespace, [
    'finangle.shared',
    'finangle.vendor',
    'finangle.modules.login',
    'finangle.modules.index'
  ]);

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/index');
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
