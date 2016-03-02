define([
  'angular',
  'src/config/namespace',
  'src/config/vendor',
  'src/modules/shared/shared.module',
  'src/modules/index/module',
  'src/modules/home/module',
  'src/modules/login/module',
  'src/modules/register/module',
  'src/components/all'
], function(angular, namespace) {

  'use strict';

  var app = angular.module(namespace, [
    'finangle.shared',
    'finangle.vendor',
    'finangle.modules.login',
    'finangle.modules.register',
    'finangle.modules.index',
    'finangle.modules.home',
    'finangle.components'
  ]);

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/index');
    }
  ]);

  app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('teal');
  });


  //move it to a folder called auth inside modules/shared? TODO
  app.factory('AuthService', ['$q', '$timeout', '$http',
    function ($q, $timeout, $http) {
    var user = null;

    // return user properies;
    function getUserStatus() {
      return user;
    }

    function login(username, password) {
      var deferred = $q.defer();

      $http.post('/user/login', {username: username, password: password})
        .success(function (data, status) {
          if(status === 200 && data.status){
            user = {id: data.id};

            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    }

    function logout() {
      var deferred = $q.defer();

      $http.get('/user/logout')
        .success(function (data) {
          user = false;
          deferred.resolve();
        })
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    }

    function register(username, password) {
      var deferred = $q.defer();

      $http.post('/user/register', {username: username, password: password})
      .success(function (data, status) {
        if(status === 200 && data.status){
          deferred.resolve();
        } else {
          deferred.reject();
        }
      })
      .error(function (data) {
        deferred.reject();
      });

      return deferred.promise;
    }

    function isLoggedIn() {
      if(user) {
        return true;
      } else {
        return false;
      }
    }

    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });
}]);


  function _init() {
    angular.element(document).ready(function() {
      angular.bootstrap(document, [namespace]);
    });
  }

  return {
    init: _init
  };
});
