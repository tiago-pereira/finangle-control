define(['angular'], function(angular) {

  var IndexCtrl = function(LoginSvc, RegisterSvc) {
    var vm = this;

    vm.openLogin = function() {
      LoginSvc.openLogin();
    };

    vm.openRegister = function() {
      RegisterSvc.openRegister();
    };

  };

  IndexCtrl.inject = ['LoginSvc', 'RegisterSvc'];

  return IndexCtrl;
});
