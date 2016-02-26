define(['angular'], function(angular) {

  var IndexCtrl = function($state, LoginSvc, RegisterSvc) {
    var vm = this;

    vm.openLogin = function($event) {
      LoginSvc.openLogin($event)
      .then(function(result){
        if (result === 'logado') {
          $state.go('home');
        }
      });
    };

    vm.openRegister = function($event) {
      RegisterSvc.openRegister($event);
    };

  };

  IndexCtrl.inject = ['$state', 'LoginSvc', 'RegisterSvc'];

  return IndexCtrl;
});
