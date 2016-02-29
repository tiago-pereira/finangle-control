define(['angular'], function(angular) {

  var HomeCtrl = function(AuthService, $state, $http, $timeout, $mdSidenav, $log) {
    var vm = this;


    vm.isOpen = false;
      vm.demo = {
        isOpen: true,
        count: 0,
        selectedDirection: 'right'
      };

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

   vm.toggleLeft = buildDelayedToggler('left');
   vm.toggleRight = buildToggler('right');

   vm.isOpenRight = function(){
     return $mdSidenav('right').isOpen();
   };
   /**
    * Supplies a function that will continue to operate until the
    * time is up.
    */
   function debounce(func, wait, context) {
     var timer;
     return function debounced() {
       var context = vm,
           args = Array.prototype.slice.call(arguments);
       $timeout.cancel(timer);
       timer = $timeout(function() {
         timer = undefined;
         func.apply(context, args);
       }, wait || 10);
     };
   }
   /**
    * Build handler to open/close a SideNav; when animation finishes
    * report completion in console
    */
   function buildDelayedToggler(navID) {
     return debounce(function() {
       $mdSidenav(navID)
         .toggle()
         .then(function () {
           $log.debug("toggle " + navID + " is done");
         });
     }, 200);
   }
   function buildToggler(navID) {
     return function() {
       $mdSidenav(navID)
         .toggle()
         .then(function () {
           $log.debug("toggle " + navID + " is done");
         });
     }
   }

  };

  HomeCtrl.inject = ['AuthService', '$state', '$http', '$timeout', '$mdSidenav', '$log'];

  return HomeCtrl;
});
