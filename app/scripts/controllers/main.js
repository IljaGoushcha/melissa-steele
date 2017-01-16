'use strict';

/**
 * @ngdoc function
 * @name melissaSteeleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the melissaSteeleApp
 */
angular.module('melissaSteeleApp')
  .controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {

    $scope.emailSent = false;

    $scope.scrollToBottom = function() {
      console.log('inside sctollToBottom');
      $window.scrollTo(0,document.body.scrollHeight);
    };

    $scope.submitForm = function(form) {

      if (form.$valid) {
        $scope.emailSent = true;
        setTimeout(function() {
          $scope.emailSent = false;
          $scope.$apply();
        }, 5000);
      } else {
        console.log('form is invalid');
      }
    };

  }]);
