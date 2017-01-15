/**
 * Created by ig on 1/1/17.
 */
'use strict';

angular
  .module('melissaSteeleApp').config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    $locationProvider
      .hashPrefix('');

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../views/home/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: '../views/about/about.html'
      })
      .state('services', {
        url: '/services',
        templateUrl: '../views/services/services.html'
      })
      .state('testimonials', {
        url: '/testimonials',
        templateUrl: '../views/testimonials/testimonials.html'
      });
      // .state('melissa-steele', {
      //   url: '/melissa-steele',
      //   templateUrl: '../views/melissa-steele.html'
      // });


});
