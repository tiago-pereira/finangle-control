define(['angular'], function(angular) {

  var HomeCtrl = function() {
    var vm = this;

  };

  HomeCtrl.inject = ['LoginSvc', 'RegisterSvc'];

  return HomeCtrl;
});
