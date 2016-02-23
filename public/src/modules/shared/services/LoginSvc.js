define(['angular'], function (angular) {

  var LoginSvc = function($uibModal){

    var _openLogin = function(){
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'src/modules/entrar/views/modal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    }

    return {
      openLogin: _openLogin
    }
  }

  LoginSvc.inject = ['$uibModal'];

  return LoginSvc;
});
