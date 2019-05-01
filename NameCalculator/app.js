(function(){
  'use strict';

  angular.module("NameCalculator", [])
  .controller("NameCalculatorController", function ($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
      var totalNameValue = calculateNumbericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };

    function calculateNumbericForString(string){
      var totalStringVal = 0;
      for(var i = 0; i < string.length; i++){
        totalStringVal += string.charCodeAt(i);
      }
      return totalStringVal;
    };
  });
})();
