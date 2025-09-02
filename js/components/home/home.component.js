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
    vm.categories = [
      {
        name: 'Terrariums',
        description: 'Low-maintenance, perfect for desks under LED lights.',
        image: 'assets/terrarium.svg',
        alt: 'Glass terrarium on a desk'
      },
      {
        name: 'Succulents',
        description: 'Perfect for window decorations.',
        image: 'assets/succulent-trio.svg',
        alt: 'Succulent trio in ceramic pots'
      },
      {
        name: 'Indoor House Plants',
        description: 'Vibrant foliage for any room.',
        image: 'assets/fiddle-leaf-fig.svg',
        alt: 'Fiddle leaf fig in a living room'
      }
    ];
  }
})();
