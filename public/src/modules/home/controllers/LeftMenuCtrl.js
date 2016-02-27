define(['angular'], function(angular) {

  var LeftMenuCtrl = function($scope, $timeout, $mdSidenav, $log, $state) {
     var imagePath = 'img/list/60.jpeg';
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

       $scope.phones = [
      { type: 'Home', number: '(555) 251-1234' },
      { type: 'Cell', number: '(555) 786-9841' },
      { type: 'Office', number: '(555) 314-1592' }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
  };

  LeftMenuCtrl.inject = ['$scope', '$timeout', '$mdSidenav', '$log', '$state'];

  return LeftMenuCtrl;
});
