define(['angular'], function(angular) {

  var LoginCtrl = function($uibModalInstance, AuthService) {
    var vm = this;

    vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    vm.login = function() {
      console.log(vm.loginForm.username, vm.loginForm.password);
      vm.error = false;
      vm.disabled = true;


      AuthService.login(vm.loginForm.username, vm.loginForm.password)
        // handle success
        .then(function () {
          console.log('logado');

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

  LoginCtrl.inject = ['$uibModalInstance', 'AuthService'];

  return LoginCtrl;
});
