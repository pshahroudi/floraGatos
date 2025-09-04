(function() {
  'use strict';

  angular
    .module('floraGatos', ['ngRoute'])
    .config(config)
    .controller('MainCtrl', MainCtrl);

  function config($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        template: '<home></home>',
        title: 'FloraGatos | Plants from Los Gatos'
      })
      .when('/terrariums', {
        template: '<terrariums></terrariums>',
        title: 'Terrariums | FloraGatos'
      })
      .when('/succulents', {
        template: '<succulents></succulents>',
        title: 'Succulents | FloraGatos'
      })
      .when('/indoor-house-plants', {
        template: '<indoor></indoor>',
        title: 'Indoor House Plants | FloraGatos'
      })
      .when('/about', {
        template: '<about></about>',
        title: 'About | FloraGatos'
      })
      .when('/contact', {
        template: '<contact></contact>',
        title: 'Contact | FloraGatos'
      })
      .otherwise('/');
  }

  function MainCtrl($rootScope) {
    var vm = this;
    vm.year = new Date().getFullYear();

    $rootScope.$on('$routeChangeSuccess', function(event, current) {
      if (current && current.$$route && current.$$route.title) {
        document.title = current.$$route.title;
      }
    });
  }
})();
