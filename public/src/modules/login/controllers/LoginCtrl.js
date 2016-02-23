define(['angular'], function(angular) {

  var LoginCtrl = function(LoginSvc) {
    var vm = this;

    vm.openLogin = function() {
      LoginSvc.openLogin();
    };

  };

  LoginCtrl.inject = ['LoginSvc'];

  return LoginCtrl;
});
