define([
  'angular',
  'src/modules/financeiro/controllers/FinanceiroCtrl',
  'src/modules/financeiro/controllers/ItemCtrl'],
  function(angular, FinanceiroCtrl, ItemCtrl) {

    angular.module('finangle.modules.financeiro', [])
    .controller('FinanceiroCtrl', FinanceiroCtrl)
    .controller('ItemCtrl', ItemCtrl);
  }
);
