define(function() {

  'use strict';

  var HomeConfig = function($stateProvider, $urlRouterProvider){//}, AuthService, $q, $state, $timeout) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/modules/home/views/index.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
      resolve: { authenticate: authenticate }
    })
    .state('home.acoes', {
      templateUrl: 'src/modules/acoes/views/index.html',
      controller: 'AcoesCtrl',
      controllerAs: 'vm',
      resolve: { authenticate: authenticate }
    })
    .state('home.opcoes', {
      templateUrl: 'src/modules/opcoes/views/index.html',
      controller: 'OpcoesCtrl',
      controllerAs: 'vm',
      resolve: { authenticate: authenticate }
    })
    .state('home.financeiro', {
      templateUrl: 'src/modules/financeiro/views/index.html',
      controller: 'FinanceiroCtrl',
      controllerAs: 'vm',
      resolve: { authenticate: authenticate }
    });


    function authenticate(AuthService, $q, $state, $timeout) {
      if (AuthService.getUserStatus()) {
        // Resolve the promise successfully
        return $q.when()
      } else {
        // The next bit of code is asynchronously tricky.

        $timeout(function() {
          // This code runs after the authentication promise has been rejected.
          // Go to the log-in page
          $state.go('index')
        })

        // Reject the authentication promise to prevent the state from loading
        return $q.reject()
      }
    }
  };

  HomeConfig.$inject = ['$stateProvider', '$urlRouterProvider',];//, 'AuthService', '$q', '$state', '$timeout'];

  return HomeConfig;
});
