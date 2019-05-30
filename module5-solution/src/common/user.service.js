(function (){
  "use strict";

  angular.module('common')
  .service('UserService', UserService)
  .constant('ItemPath', 'https://osong-restaurant.herokuapp.com/menu_items/');

  UserService.$inject = ['$http', 'ItemPath'];
  function UserService($http, ItemPath){
    var service = this;
    service.user = {};

    service.getMenuItem = function(item){
      return $http({
        method: 'GET',
        url: (ItemPath + item + ".json")
      }).then(function(result){
        return result.data;
      })
      .catch(function(error){
        return {};
      });
    };

    service.addUser = function(user){
      service.user = user;
    };

    service.getUser = function(){
      return service.user;
    };
  }
})();
