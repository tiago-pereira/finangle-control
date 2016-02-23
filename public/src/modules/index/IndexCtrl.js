define(['angular'], function (angular) {

  var IndexCtrl = function(LoginSvc){
    console.log($uibModal);

    var vm = this;

    vm.openEntrar = function(){

    }

  }

  IndexCtrl.inject = ['LoginSvc'];

  return IndexCtrl;
});
