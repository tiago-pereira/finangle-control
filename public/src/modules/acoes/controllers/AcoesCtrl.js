define(['angular'], function(angular) {

  var AcoesCtrl = function(AuthService, $http, $mdMedia, $mdDialog, $mdBottomSheet) {
    var vm = this;

    vm.selectedStock = {index: null, stock: null};

    vm.isStockSelected = function(index) {
      return vm.selectedStock.index === index;
    };

    vm.showListBottomSheet = function() {
      vm.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'src/modules/acoes/views/stock.html',
        controller: 'StockCtrl'
      }).then(function(clickedItem) {

      });
    };

    vm.getStocks = function($event) {
      $http.post('/user/stocks', {user: AuthService.getUserStatus().id})
      .success(function (data, status) {
        console.log(data);
        vm.stocks = data;
      })
      .error(function (data) {
        console.log('erro');
      });
    };

    vm.selectStock = function(index, stock) {
      console.log(stock);
      vm.selectedStock.index = index;
      vm.selectedStock.stock = stock;
    };

    vm.addStock = function($event) {
      handleStock($event, 'ADD').then(function(data){
        console.log(data);
        vm.stocks = data;

        updateBalance();
      });
    };

    vm.showDetails = function($event, stock) {
      vm.showListBottomSheet();
    };

    function handleStock($event, operation, stock) {
      var customFullscreen = $mdMedia('xs') || $mdMedia('sm');

      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && customFullscreen;

      return $mdDialog.show({
        controller: 'StockCtrl',
        controllerAs: 'vm',
        templateUrl: 'src/modules/acoes/views/stock.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        resolve: {
          options: function(){
            return {
              operation: operation,
              stock: stock
            };
          }
        }
      });
    }

    vm.getStocks();

  };

  AcoesCtrl.inject = ['AuthService', '$http', '$mdMedia', '$mdDialog', '$mdBottomSheet'];

  return AcoesCtrl;
});
