define(['angular'], function(angular) {

  var LoginSvc = function($uibModal, $mdMedia, $mdDialog) {

    var customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    var _openLogin = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && customFullscreen;

      return $mdDialog.show({
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        templateUrl: 'src/modules/login/views/login.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
    }

    return {
      openLogin: _openLogin
    };
  };

  LoginSvc.inject = ['$uibModal', '$mdMedia', '$mdDialog'];

  return LoginSvc;
});
