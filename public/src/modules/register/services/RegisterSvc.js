define(['angular'], function(angular) {

  var RegisterSvc = function($uibModal, $mdMedia, $mdDialog) {

    var customFullscreen = $mdMedia('sm') || $mdMedia('sm');

    var _openRegister = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && customFullscreen;

      return $mdDialog.show({
        controller: 'RegisterCtrl',
        controllerAs: 'vm',
        templateUrl: 'src/modules/register/views/register.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      });
    }

    return {
      openRegister: _openRegister
    };
  };

  RegisterSvc.inject = ['$uibModal', '$mdMedia', '$mdDialog'];

  return RegisterSvc;
});
