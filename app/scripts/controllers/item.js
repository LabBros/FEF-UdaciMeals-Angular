'use strict';

/**
 * @ngdoc function
 * @name udaciMealsAngularApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the udaciMealsAngularApp
 */
angular.module('udaciMealsAngularApp')
  .controller('ItemCtrl', function ($stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.id = $stateParams.id;
  });
