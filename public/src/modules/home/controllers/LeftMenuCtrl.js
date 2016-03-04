define(['angular'], function(angular) {

  var LeftMenuCtrl = function($scope, $timeout, $mdSidenav, $log, $state) {

    var vm = this;

    $scope.loadItem = function(state){
      $state.go('home.'+state);
    };

    vm.close = function () {
       $mdSidenav('left').close()
         .then(function () {
           $log.debug("close LEFT is done");
         });
     };
  };

  LeftMenuCtrl.inject = ['$scope', '$timeout', '$mdSidenav', '$log', '$state'];

  return LeftMenuCtrl;
});
