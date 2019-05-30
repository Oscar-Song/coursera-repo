(function(){
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['userInfo', 'basePath'];
  function InfoController(userInfo, basePath){
    var $ctrl = this;
    $ctrl.userInfo = userInfo;
    $ctrl.basePath = basePath;

    $ctrl.missingUser = function(){
      return angular.equals($ctrl.userInfo, {});
    };
  }


})();
