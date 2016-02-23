define([
  'angular',
  'src/modules/register/controllers/RegisterCtrl',
  'src/modules/register/services/RegisterSvc'],
  function(angular, RegisterCtrl, RegisterSvc) {

    angular.module('finangle.modules.register', [])
    .controller('RegisterCtrl', RegisterCtrl)
    .service('RegisterSvc', RegisterSvc);

  }
);
