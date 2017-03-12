(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.myInfo = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getShortNameData = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
      return response.data;
    });
  };

  service.setMyInfo = function (firstName, lastName, email, phone, shortName)
  {
    service.myInfo.firstName = firstName;
    service.myInfo.lastName = lastName;
    service.myInfo.email = email;
    service.myInfo.phone = phone;
    service.myInfo.shortName = shortName;
  }

  service.getMyInfo = function ()
  {
    return service.myInfo;
  }

}



})();
