(function() {
  'use strict';

  angular
    .module('floraGatos', ['ngRoute'])
    .config(config)
    .controller('MainCtrl', MainCtrl);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<home></home>',
        title: 'FloraGatos | Plants from Los Gatos'
      })
      .when('/shop', {
        template: '<shop></shop>',
        title: 'Shop | FloraGatos'
      })
      .when('/terrariums', {
        template: '<terrariums></terrariums>',
        title: 'Terrariums | FloraGatos'
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
