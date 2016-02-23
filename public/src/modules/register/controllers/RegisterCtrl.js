define(['angular'], function(angular) {

  var RegisterCtrl = function($uibModalInstance, AuthService) {
    var vm = this;

    vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    }

    vm.register = function () {
      console.log('oi gsus', vm.loginForm.username, vm.loginForm.password);
      vm.error = false;
      vm.disabled = true;

      AuthService.register(vm.loginForm.username, vm.loginForm.password)
        // handle success
        .then(function () {
          console.log('lsalvooooooo');

          $uibModalInstance.dismiss('cancel');
        }, function(data){
          console.log(data, 'catch');
          vm.error = true;
          vm.errorMessage = "Invalid username and/or password";
          vm.disabled = false;
          vm.loginForm = {};
        });

    };


  };

  RegisterCtrl.inject = ['$uibModalInstance', 'AuthService'];

  return RegisterCtrl;
});
