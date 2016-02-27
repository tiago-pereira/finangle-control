define([
  'angular',
  'src/modules/opcoes/controllers/OpcoesCtrl'],
  function(angular, OpcoesCtrl) {

    angular.module('finangle.modules.opcoes', [])
    .controller('OpcoesCtrl', OpcoesCtrl);
  }
);
