define([
  'angular',
  'src/modules/index/controllers/IndexCtrl',
  'src/modules/index/config/IndexConfig',
  'src/modules/login/module',
  'src/modules/register/module'],
  function(angular, IndexCtrl, IndexConfig) {

    angular.module('finangle.modules.index',
    ['finangle.modules.login',
    'finangle.modules.register'])
    .controller('IndexCtrl', IndexCtrl)
    .config(IndexConfig);
  }
);
