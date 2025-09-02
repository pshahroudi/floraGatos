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
      .when('/about', {
        template: '<about></about>',
        title: 'About | FloraGatos'
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
