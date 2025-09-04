(function () {
  "use strict";

  angular.module("floraGatos").component("indoor", {
    templateUrl: "js/components/indoor/indoor.template.html",
    controller: IndoorController,
  });

  function IndoorController() {
    var vm = this;

    vm.products = [
      {
        name: "Monstera Deliciosa",
        image: "assets/indoor_monstera.svg",
        description:
          "Iconic split-leaf plant for bright rooms.",
        details:
          "Delivered in a 6-inch pot; enjoys indirect light.",
        price: "45.00",
      },
      {
        name: "Snake Plant",
        image: "assets/indoor_snake_plant.svg",
        description:
          "Hardy plant that tolerates low light.",
        details:
          "Perfect for beginners; comes in 6-inch planter.",
        price: "25.00",
      },
      {
        name: "Peace Lily",
        image: "assets/indoor_peace_lily.svg",
        description:
          "Graceful plant that purifies indoor air.",
        details:
          "Blooms with white spathes; prefers moderate light.",
        price: "30.00",
      },
    ];

    vm.selectedProduct = {};

    vm.openDetails = function (product) {
      vm.selectedProduct = product;
    };
  }
})();
