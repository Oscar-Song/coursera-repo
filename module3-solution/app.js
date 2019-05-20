(function(){
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', " https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'menuList.html',
      scope: {
        menu: '<',
        onRemove: '&'
      },

    };
    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService){
    var menu = this;

    menu.keyword = "chicken";
    menu.found = [];
    menu.isNothingFound = false;

    menu.getList = function(){
      console.log(menu.keyword == "");
      menu.isNothingFound = (menu.keyword == "");
      if(menu.keyword == ""){
        menu.found = [];
        return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(menu.keyword);
      promise.then(function(response){
        menu.found = response;
        menu.isNothingFound = (menu.found.length == 0);
      })
      .catch(function(error){
        console.log("something wrong: " + error);
      });

    };

    menu.removeItem = function(index){
      menu.found.splice(index, 1);
    }

  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath){
    var service = this;

    service.getMatchedMenuItems = function(keyword){
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
      // process result and only keep items that match
      var foundItems = filterMenu(result.data.menu_items, keyword);
      // return processed items
      return foundItems;
    });
    };

    //change filter implementation
     function filterMenu(menu_items, keyword){
       var foundItems = [];
       for(var i = 0; i <menu_items.length; i++){
         var item = menu_items[i];
         if (item.name.toLowerCase().indexOf(keyword) !== -1) {
           foundItems.push(item);
         }
       }
       return foundItems;
     }
  }


})();
