(function(){
  'using strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject=['items'];
  function ItemsController(items){
    itemList = this;
    itemList.items = items;
  }

})();
