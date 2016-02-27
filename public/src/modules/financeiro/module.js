define([
  'angular',
  'src/modules/financeiro/controllers/FinanceiroCtrl',
  'src/modules/financeiro/controllers/AddItemCtrl'],
  function(angular, FinanceiroCtrl, AddItemCtrl) {

    angular.module('finangle.modules.financeiro', [])
    .controller('FinanceiroCtrl', FinanceiroCtrl)
    .controller('AddItemCtrl', AddItemCtrl);
  }
);
