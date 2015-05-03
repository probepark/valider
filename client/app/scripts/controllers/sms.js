'use strict';

/**
 * @ngdoc function
 * @name validerApp.controller:SmsCtrl
 * @description
 * # SmsCtrl
 * Controller of the validerApp
 */
angular.module('validerApp')
  .controller('SmsCtrl', ["$scope", "$http", function ($scope, $http) {
    $scope.hello = function() {
      var dataObj = {
        message: $scope.smsMessage
      };
      $http.post('api/validate/test', dataObj).success(function(data) {
        $scope.smsResult = data;
      });
    };
  }]);
