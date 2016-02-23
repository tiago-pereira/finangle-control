define([
  'angular',
  'src/modules/login/controllers/LoginCtrl',
  'src/modules/login/services/LoginSvc'],
  function(angular, LoginCtrl, LoginSvc) {

    angular.module('finangle.modules.login', [])
    .controller('LoginCtrl', LoginCtrl)
    .service('LoginSvc', LoginSvc);

  }
);
