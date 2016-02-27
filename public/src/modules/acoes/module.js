define([
  'angular',
  'src/modules/acoes/controllers/AcoesCtrl'],
  function(angular, AcoesCtrl) {

    angular.module('finangle.modules.acoes', [])
    .controller('AcoesCtrl', AcoesCtrl);
  }
);
