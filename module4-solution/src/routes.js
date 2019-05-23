(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    //home page
    .state('home',{
      url: '/',
      templateUrl: 'src/home/home.template.html'
    })

    //categories
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories/categories.template.html',
      controller: 'CategoriesController as categoryList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    //Items
    .state('items', {
      url: '/category-items/{categoryShortName}',
      templateUrl: 'src/category-items/items.template.html',
      controller: 'ItemsController as itemList',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }

})();
