define(['angular'], function(angular) {

  var LoginSvc = function($uibModal) {

    var _openLogin = function() {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'src/modules/login/views/login.html',
        controller: 'LoginCtrl',
        size: 'lg',
        resolve: {
          items: function () {
            return ['oi','2'];
          }
        }
      });
    };

    return {
      openLogin: _openLogin
    };
  };

  LoginSvc.inject = ['$uibModal'];

  return LoginSvc;
});
