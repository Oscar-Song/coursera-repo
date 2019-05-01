(function(){
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.message = "";
    $scope.items = "";

    $scope.check = function (){
      $scope.message = checkItemsTooMuch($scope.items);
    };

    function checkItemsTooMuch(items){
      if(items == ""){
        return "Please enter data first";
      }
      var itemList = $scope.items.split(',');
      var filteredList = itemList.filter(function (item){
        return item;
      });
      if(filteredList.length <=3){
        return "Enjoy!";
      }
      else{
        return "Too Much!";
      }
    }
  }
})();
