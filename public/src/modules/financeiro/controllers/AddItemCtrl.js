define(['angular'], function(angular) {

  var AddItemCtrl = function(AuthService, $mdDialog, $http) {

    var vm = this;

    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.addItem = function() {
      $http.post('/user/add/item', {user: AuthService.getUserStatus().id, value: vm.form.value, desc: vm.form.desc})
      .success(function (data, status) {
        $mdDialog.hide(data);
      })
      .error(function (data) {
        $mdDialog.cancel();
      });
    };


  };

  AddItemCtrl.inject = ['AuthService', '$mdDialog', '$htpp'];

  return AddItemCtrl;
});
