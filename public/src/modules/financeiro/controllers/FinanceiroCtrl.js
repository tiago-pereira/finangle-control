define(['angular'], function(angular) {

  var FinanceiroCtrl = function(AuthService, $http, $mdMedia, $mdDialog) {
    var vm = this;



    vm.items = [];

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

    vm.addItem = function($event) {
      var customFullscreen = $mdMedia('xs') || $mdMedia('sm');

      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && customFullscreen;

      $mdDialog.show({
        controller: 'AddItemCtrl',
        controllerAs: 'vm',
        templateUrl: 'src/modules/financeiro/views/addItem.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      }).then(function(data){
        vm.items = data;
      });
    }


    vm.getItems();


  };

  FinanceiroCtrl.inject = ['AuthService', '$http', '$mdMedia', '$mdDialog'];

  return FinanceiroCtrl;
});
