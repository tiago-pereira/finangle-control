define([
  'angular',
  'src/config/namespace',
  'src/modules/shared/shared.module',
  'src/modules/index/module',
  'src/modules/login/module',
  'src/modules/register/module',
  'src/config/vendor'
], function(angular, namespace) {

  'use strict';

  var app = angular.module(namespace, [
    'finangle.shared',
    'finangle.vendor',
    'finangle.modules.login',
    'finangle.modules.register',
    'finangle.modules.index'
  ]);

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/index');
    }
  ]);


  app.factory('AuthService', ['$q', '$timeout', '$http',
    function ($q, $timeout, $http) {
    var user = null;
    // return available functions for use in controllers]

    function getUserStatus() {
      return user;
    }

    function login(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/user/login', {username: username, password: password})
        .success(function (data, status) {
          if(status === 200 && data.status){
            user = true;
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
