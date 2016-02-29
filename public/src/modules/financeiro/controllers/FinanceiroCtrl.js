define(['angular'], function(angular) {

  var FinanceiroCtrl = function(AuthService, $http, $mdMedia, $mdDialog) {
    var vm = this;


    vm.carteira = {total: 0};


    vm.selectedItem = {index: null, item: null};
    vm.items = [];

    updateBalance();

    function updateBalance(){
      $http.post('/user/status', {user: AuthService.getUserStatus().id})
      .success(function (data, status) {
        console.log(data);

        if(data[0]){
          vm.carteira.total = data[0].balance;
        } else {
          vm.carteira.total = 0;
        }
        
      })
      .error(function (data) {
        console.log('erro');
      });
    }

    function clearSelection(){
      vm.selectedItem = {
        index: null,
        item: null
      };
    };

    vm.getItems = function($event) {
      $http.post('/user/items', {user: AuthService.getUserStatus().id})
      .success(function (data, status) {
        console.log(data);
        vm.items = data;
      })
      .error(function (data) {
        console.log('erro');
      });
    };

    vm.deleteItem = function($event, item) {
      $http.delete('/user/delete/item/' + item._id)
      .success(function(data) {
        vm.items = data;

        clearSelection();

        updateBalance();
      })
      .error(function(data) {
          console.log('Error: ' + data);
      });
    }

    vm.isItemSelected = function(index) {
      return vm.selectedItem.index === index;
    };

    vm.selectItem = function(index, item) {
      vm.selectedItem.index = index;
      vm.selectedItem.item = item;
    };

    vm.addItem = function($event) {
      handleItem($event, 'ADD').then(function(data){
        console.log(data);
        vm.items = data;

        updateBalance();
      });
    };

    vm.editItem = function($event, item){
      handleItem($event, 'EDIT', item).then(function(data){
        console.log(data);
        vm.items = data;
        vm.selectItem(vm.selectedItem.index, vm.items[vm.selectedItem.index]);

        updateBalance();
      });;
    };

    function handleItem($event, operation, item) {
      var customFullscreen = $mdMedia('xs') || $mdMedia('sm');

      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && customFullscreen;

      return $mdDialog.show({
        controller: 'ItemCtrl',
        controllerAs: 'vm',
        templateUrl: 'src/modules/financeiro/views/item.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        resolve: {
          options: function(){
            return {
              operation: operation,
              item: item
            };
          }
        }
      });
    }



    vm.getItems();


  };

  FinanceiroCtrl.inject = ['AuthService', '$http', '$mdMedia', '$mdDialog'];

  return FinanceiroCtrl;
});
