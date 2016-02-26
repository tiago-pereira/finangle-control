define(['angular'], function(angular) {

  var RegisterCtrl = function(AuthService, $mdDialog) {
    var vm = this;

    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.register = function() {
      vm.error = false;
      vm.disabled = true;

      AuthService.register(vm.loginForm.username, vm.loginForm.password)
        // handle success
        .then(function () {
          $mdDialog.hide('registrado');
        }, function(data){
          vm.error = true;
          vm.errorMessage = "Invalid username and/or password";
          vm.disabled = false;
          vm.loginForm = {};
        });

    };


  };

  RegisterCtrl.inject = ['AuthService', '$mdDialog'];

  return RegisterCtrl;
});
