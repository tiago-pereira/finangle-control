define(['angular'], function(angular) {

  var LoginCtrl = function(AuthService, $mdDialog) {
    var vm = this;

    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.login = function() {
      console.log(vm.form.username, vm.form.password);
      vm.error = false;
      vm.disabled = true;


      AuthService.login(vm.form.username, vm.form.password)
        // handle success
        .then(function () {
          console.log('wut m8');
          $mdDialog.hide('logado');
        }, function(data){
          console.log(data, 'catch');
          vm.error = true;
          vm.errorMessage = "Invalid username and/or password";
          vm.disabled = false;
          vm.loginForm = {};
        });

    };


  };

  LoginCtrl.inject = ['AuthService', '$mdDialog'];

  return LoginCtrl;
});
