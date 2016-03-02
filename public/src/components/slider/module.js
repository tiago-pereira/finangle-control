define([
  'angular',
  'src/components/slider/slider'
], function(angular, Slider) {

  angular.module('finangle.components.slider', [])
  .directive('slider', Slider);

});
