'use strict';

/**
 * @ngdoc service
 * @name udaciMealsAngularApp.orderManager
 * @description
 * # orderManager
 * Service in the udaciMealsAngularApp.
 */
angular.module('udaciMealsAngularApp')
  .service('orderManager', function () {
    var selectedDay = 'Monday';

    this.getSelectedDay = function() {
      return selectedDay;
    };

    this.setActiveDay = function(day) {
      selectedDay = day;
    };
  });
