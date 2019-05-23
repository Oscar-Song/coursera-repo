(function(){
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/category-items/items.template.html',
    bindings: {
      items: '<'
    }
  });
})();
