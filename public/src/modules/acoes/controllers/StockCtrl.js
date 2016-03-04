define(['angular'], function(angular) {

  var StockCtrl = function(AuthService, $mdDialog, $http) {

    var vm = this;

    vm.types = [
      {desc: 'Débito', value: 'debito'},
      {desc: 'Crédito', value: 'credito'}
    ];

    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.addStock = function() {
      var value = vm.form.value;

      if(vm.form.type === 'debito'){
        value = -value;
      }

      $http.post('/user/add/stock',
        {
          user: AuthService.getUserStatus().id,
          code: vm.form.code,
          quantity: vm.form.quantity,
          buyValue: vm.form.buyValue
        }
      )
      .success(function (data, status) {
        $mdDialog.hide(data);
      })
      .error(function (data) {
        $mdDialog.cancel();
      });
    };


  };

  StockCtrl.inject = ['AuthService', '$mdDialog', '$htpp', 'options'];

  return StockCtrl;
});
