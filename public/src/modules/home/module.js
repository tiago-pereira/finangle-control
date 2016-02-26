define([
  'angular',
  'src/modules/home/controllers/HomeCtrl',
  'src/modules/home/config/HomeConfig'],
  function(angular, HomeCtrl, HomeConfig) {

    angular.module('finangle.modules.home', [])
    .controller('HomeCtrl', HomeCtrl)
    .config(HomeConfig);
  }
);
