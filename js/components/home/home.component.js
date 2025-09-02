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
        image: 'https://via.placeholder.com/400x300?text=Succulent+Trio',
        alt: 'Succulent trio in ceramic pots'
      },
      {
        name: 'Fiddle Leaf Fig',
        description: 'A popular indoor tree that thrives in bright light.',
        image: 'https://via.placeholder.com/400x300?text=Fiddle+Leaf+Fig',
        alt: 'Fiddle leaf fig in a living room'
      },
      {
        name: 'Snake Plant',
        description: 'Air-purifying plant ideal for low light spaces.',
        image: 'https://via.placeholder.com/400x300?text=Snake+Plant',
        alt: 'Snake plant in a white pot'
      }
    ];
  }
})();
