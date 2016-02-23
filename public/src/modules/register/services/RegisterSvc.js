define(['angular'], function(angular) {

  var RegisterSvc = function($uibModal) {

    var _openRegister = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'src/modules/register/views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm',
        size: 'sm',
        resolve: {
          items: function () {
            return ['oi','2'];
          }
        }
      });
    };

    return {
      openRegister: _openRegister
    };
  };

  RegisterSvc.inject = ['$uibModal'];

  return RegisterSvc;
});
