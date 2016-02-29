define(['angular'], function(angular) {

  var ItemCtrl = function(AuthService, $mdDialog, $http, options) {

    var vm = this;

    vm.options = options;

    if(options.item){
      vm.form = {
        value: options.item.value,
        desc: options.item.desc,
        type: options.item.type
      }
    }

    vm.types = [
      {desc: 'Débito', value: 'debito'},
      {desc: 'Crédito', value: 'credito'}
    ];

    vm.cancel = function() {
      $mdDialog.cancel();
    };

    vm.handleItem = function() {
      if (options.operation === 'ADD') {
        addItem();
      } else if (options.operation === 'EDIT') {
        editItem();
      }
    }

    function editItem() {
      $http.post('/user/edit/item',
        {
          id: options.item._id,
          user: AuthService.getUserStatus().id,
          value: vm.form.value,
          desc: vm.form.desc,
          type: vm.form.type
        }
      )
      .success(function (data, status) {
        $mdDialog.hide(data);
      })
      .error(function (data) {
        $mdDialog.cancel();
      });
    }

    function addItem() {
      var value = vm.form.value;

      if(vm.form.type === 'debito'){
        value = -value;
      }

      $http.post('/user/add/item',
        {
          user: AuthService.getUserStatus().id,
          value: value,
          desc: vm.form.desc,
          type: vm.form.type
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

  ItemCtrl.inject = ['AuthService', '$mdDialog', '$htpp', 'options'];

  return ItemCtrl;
});
