'use strict';

/**
 * @ngdoc function
 * @name validerApp.controller:SmsCtrl
 * @description
 * # SmsCtrl
 * Controller of the validerApp
 */
angular.module('validerApp')
  .controller('SmsCtrl', ["$scope", "$http", "localStorageService", function ($scope, $http, localStorageService) {

    $scope.$watch('smsMessage', function (newVal, oldVal) {
      if (newVal !== undefined) {
        localStorageService.set('smsMessage', angular.toJson($scope.smsMessage));
      }
    }, true);

    $scope.update = function() {
      var dataObj = {
        message: $scope.smsMessage
      };
      $http.post('api/validate/test', dataObj).success(function(data) {
        $scope.smsResult = data;
      });
    };

    $scope.smsMessage = angular.fromJson(localStorageService.get('smsMessage'));
    if ($scope.smsMessage !== undefined) {
      $scope.update();
    }

  }]);
