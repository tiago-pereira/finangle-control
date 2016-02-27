define([
  'angular',
  'src/modules/home/controllers/HomeCtrl',
  'src/modules/home/controllers/LeftMenuCtrl',
  'src/modules/home/config/HomeConfig',
  'src/modules/acoes/module',
  'src/modules/opcoes/module',
  'src/modules/financeiro/module'],
  function(angular, HomeCtrl, LeftMenuCtrl, HomeConfig) {

    angular.module('finangle.modules.home', [
      'finangle.modules.acoes',
      'finangle.modules.financeiro',
      'finangle.modules.opcoes'])
    .controller('HomeCtrl', HomeCtrl)
    .controller('LeftMenuCtrl', LeftMenuCtrl)
    .config(HomeConfig);
  }
);
