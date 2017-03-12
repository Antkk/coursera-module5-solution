(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

// SignupController.$inject = ['menuCategories'];
function SignupController() {
  var $ctrl = this;

  $ctrl.name = "";
  $ctrl.lastName = "";
  $ctrl.email = "";
  $ctrl.telephone = "";

  $ctrl.go = function ()
  {
    console.log("Go go go!");
  }
}


})();
