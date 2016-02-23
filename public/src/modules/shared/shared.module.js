define([
  'angular',
  'src/modules/shared/services/LoginSvc'],
  function (angular, LoginSvc) {

  angular.module('finangle.shared', [])
  .service('LoginSvc', LoginSvc);

});
