(function () {
"use strict";

angular.module('restaurant')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService'];
function InfoController(MenuService) {
  var $ctrl = this;

  $ctrl.signedUp = false;

  var data = MenuService.getMyInfo();
  if (data.hasOwnProperty('firstName') && data.firstName != ""){
    $ctrl.name = data.firstName;
    $ctrl.lastName = data.lastName;
    $ctrl.email = data.email;
    $ctrl.telephone = data.phone;
    $ctrl.dish = data.shortName;

    $ctrl.signedUp = true;
  }
  else
  {
    $ctrl.name = "Error";
    $ctrl.lastName = "Error";
    $ctrl.email = "Error";
    $ctrl.telephone = "Error";
    $ctrl.dish = "Error";

    $ctrl.signedUp = false;
  }
}
})();
