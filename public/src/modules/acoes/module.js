define([
  'angular',
  'src/modules/acoes/controllers/AcoesCtrl',
  'src/modules/acoes/controllers/StockCtrl'],
  function(angular, AcoesCtrl, StockCtrl) {

    angular.module('finangle.modules.acoes', [])
    .controller('AcoesCtrl', AcoesCtrl)
    .controller('StockCtrl', StockCtrl);
  }
);
