(function () {
  'use strict';

  angular.module('floraGatos').component('terrariums', {
    templateUrl: 'js/components/terrariums/terrariums.template.html',
    controller: TerrariumsController,
  });

  function TerrariumsController() {
    var vm = this;

    vm.products = [
      {
        name: 'Woodland Moss Terrarium',
        image: 'assets/terrarium_on_desk.png',
        description: 'Compact glass terrarium filled with lush green mosses.',
        details:
          'This handcrafted terrarium brings a slice of the forest floor to your desk. Features layered drainage, nutrient-rich substrate, and a mix of thriving moss varieties.',
      },
      {
        name: 'Desert Cactus Terrarium',
        image: 'https://via.placeholder.com/300x200?text=Terrarium',
        description: 'A sun-loving mini desert landscape in a clear dome.',
        details:
          'A striking arrangement of miniature cacti and stones that thrives on minimal water. Perfect for bright spaces and busy plant lovers.',
      },
    ];

    vm.selectedProduct = {};

    vm.openDetails = function (product) {
      vm.selectedProduct = product;
    };
  }
})();
