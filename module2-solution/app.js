(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBroughtController', AlreadyBroughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getToBuyList();

    toBuyList.buyItem = function(index){
      ShoppingListCheckOffService.buyItem(index);
    };

    toBuyList.everythingBrought = function (){
      return toBuyList.items.length == 0;
    }
  }

  AlreadyBroughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBroughtController(ShoppingListCheckOffService){
    var broughtList = this;
    broughtList.items = ShoppingListCheckOffService.getBroughtList();

    broughtList.nothingBrought = function(){
      return broughtList.items.length == 0;
    }
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyList = [
      {
        name: "cookies",
        quality: "10"
      },
      {
        name: "avacodos",
        quality: "5"
      },
      {
        name: "milk",
        quality: "1"
      },
      {
        name: "plates",
        quality: "2"
      }
    ];
    var broughtList = [];
    var nothingBrought = true;
    var everythingBrought = false;

    service.buyItem = function(itemIndex){
      var item = toBuyList[itemIndex];
      toBuyList.splice(itemIndex, 1);
      broughtList.push(item);
    };

    service.getToBuyList = function(){
      return toBuyList;
    };

    service.getBroughtList = function(){
      return broughtList;
    };
  }

})();
