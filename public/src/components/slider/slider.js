define(['angular'], function (angular) {

  var SliderDirective = function(){
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'src/components/slider/slider.html',
      scope: {

      },
      link: function(scope, elem, attrs) {
        console.log(elem);

      }
    };
  };

  SliderDirective.$inject = [];

  return SliderDirective;
});
