(function () {
  "use strict";

  angular.module("floraGatos").component("terrariums", {
    templateUrl: "js/components/terrariums/terrariums.template.html",
    controller: TerrariumsController,
  });

  function TerrariumsController() {
    var vm = this;

    vm.products = [
      {
        name: "Geometric Oasis Terrarium",
        image: "assets/terrarium_bed.png",
        description:
          "A stunning glass terrarium with sharp angles that showcase a modern succulent scene.",
        details:
          "Crafted with clean lines, this terrarium houses a variety of hardy succulents and moss, creating a vibrant focal point for any room.",
      },
      {
        name: "Classic Bell Jar Terrarium",
        image: "assets/terrarium_kitchen_counter.png",
        description:
          "Traditional bell jar filled with lush foliage and natural accents.",
        details:
          "A timeless design featuring layered drainage and humidity-loving plants to bring calm to your desk or shelf.",
      },
      {
        name: "Hanging Orb Terrarium",
        image: "assets/terrarium_red_fittonia_on_desk.png",
        description:
          "A whimsical hanging orb perfect for small spaces and air plants.",
        details:
          "Suspended elegance showcasing airy tillandsia and decorative stones. Easy to care for and ideal for bright corners.",
      },
    ];

    vm.selectedProduct = {};

    vm.openDetails = function (product) {
      vm.selectedProduct = product;
    };
  }
})();
