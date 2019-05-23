(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('CategoriesApiLink', 'https://davids-restaurant.herokuapp.com/categories.json')
  .constant('ItemsForCategoryApiLink', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

  MenuDataService.$inject=['$http', 'CategoriesApiLink', 'ItemsForCategoryApiLink'];
  function MenuDataService($http, CategoriesApiLink, ItemsForCategoryApiLink){
    var data = this;

    data.getAllCategories = function(){
      //this method should return a promise which is a result of using the $http service,
      //using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
      return $http({
        method: 'GET',
        url: CategoriesApiLink
      }).then(function(result){
        return result.data;
      })
    };

    data.getItemsForCategory = function(categoryShortName){
      // this method should return a promise which is a result of using the $http service,
      //using the following REST API endpoint:
      //https://davids-restaurant.herokuapp.com/menu_items.json?category=, where, before the call to the server,
      //your code should append whatever categoryShortName value was passed in as an argument into the getItemsForCategory method.

      return $http({
        method: "GET",
        url: (ItemsForCategoryApiLink + categoryShortName)
      }).then(function(result){
        return result.data.menu_items;
      })
    };
  }
})();
