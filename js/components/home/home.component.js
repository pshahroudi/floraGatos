(function() {
  'use strict';

  angular
    .module('floraGatos')
    .component('home', {
      templateUrl: 'js/components/home/home.template.html',
      controller: HomeController
    });

  function HomeController() {
    var vm = this;
    vm.products = [
      {
        name: 'Succulent Trio',
        description: 'Low-maintenance succulents perfect for desks and shelves.',
        image: 'assets/succulent-trio.svg',
        alt: 'Succulent trio in ceramic pots'
      },
      {
        name: 'Fiddle Leaf Fig',
        description: 'A popular indoor tree that thrives in bright light.',
        image: 'assets/fiddle-leaf-fig.svg',
        alt: 'Fiddle leaf fig in a living room'
      },
      {
        name: 'Snake Plant',
        description: 'Air-purifying plant ideal for low light spaces.',
        image: 'assets/snake-plant.svg',
        alt: 'Snake plant in a white pot'
      }
    ];
  }
})();
