define(['angular'], function(angular) {

  var HomeCtrl = function(AuthService, $state, $http) {
    var vm = this;


    vm.logout = function($event) {
      AuthService.logout()
      .then(function(){
        $state.go('index');
      })
    };


    vm.add = function($event) {
      $http.post('/user/add/item', {user: AuthService.getUserStatus().id, desc: 'descricao', value: 10})
        .success(function (data, status) {
          console.log('sucesso', data);
        })
        .error(function (data) {
          console.log('erro');
        });


    };

  };

  HomeCtrl.inject = ['AuthService', '$state', '$http'];

  return HomeCtrl;
});
