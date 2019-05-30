(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService'];
  function SignUpController(UserService){
    var $ctrl = this;
    $ctrl.completed = false;
    $ctrl.missingItem = false;

    $ctrl.submit = function(){
      var result = UserService.getMenuItem($ctrl.item);
      result.then(function(result){
        $ctrl.missingItem = angular.equals(result,{});
        if(!$ctrl.missingItem){
          $ctrl.user.item = result;
          UserService.addUser($ctrl.user);
          $ctrl.completed = true;
        }

      });
    };
  }

}) ();
