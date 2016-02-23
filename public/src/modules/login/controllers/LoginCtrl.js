define(['angular'], function(angular) {

  var LoginCtrl = function($uibModalInstance, AuthService) {
    var vm = this;

    vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    }

    vm.login = function () {

      vm.error = false;
      vm.disabled = true;

      AuthService.login(vm.loginForm.username, vm.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/');
          vm.disabled = false;
          vm.loginForm = {};
        })
        // handle error
        .catch(function () {
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
