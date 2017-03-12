(function () {
"use strict";

angular.module('restaurant')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var $ctrl = this;

  $ctrl.name = "";
  $ctrl.lastName = "";
  $ctrl.email = "";
  $ctrl.telephone = "";
  $ctrl.dish = "";

  $ctrl.saved = false;
  $ctrl.notExists = false;

  $ctrl.go = function ()
  {
    MenuService.getShortNameData($ctrl.dish)
    .then(function(data)
    {
      $ctrl.saved = true;
      $ctrl.notExists = false;
      MenuService.setMyInfo($ctrl.name, $ctrl.lastName, $ctrl.email, $ctrl.telephone, $ctrl.dish);
    })
    .catch(function(err)
    {
      $ctrl.saved = false;
      $ctrl.notExists = true;
    });
  }
}
})();
