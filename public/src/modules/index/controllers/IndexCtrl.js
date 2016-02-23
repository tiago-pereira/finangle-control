define(['angular'], function(angular) {

  var IndexCtrl = function(LoginSvc) {
    var vm = this;

    vm.openLogin = function() {
      LoginSvc.openLogin();
    };

  };

  IndexCtrl.inject = ['LoginSvc'];

  return IndexCtrl;
});
