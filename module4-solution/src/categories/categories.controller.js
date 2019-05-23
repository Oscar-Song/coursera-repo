(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories']
  function CategoriesController(categories){
    var categoryList = this;
    categoryList.categories = categories;
  }

})();
