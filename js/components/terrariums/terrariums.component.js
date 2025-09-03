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
        name: "Terrarium - Wire jar glass",
        image: "assets/terrarium_wire_jar_01.jpeg",
        description:
          "A stunning glass terrarium with sharp angles that showcase a modern succulent scene.",
        details:
          "Terrarium with Vertical moss, red lava stone, fittonia and other plants",
        price: "75.00",
      },
      // {
      //   name: "Classic Bell Jar Terrarium",
      //   image: "assets/terrarium_kitchen_counter.png",
      //   description:
      //     "Traditional bell jar filled with lush foliage and natural accents.",
      //   details:
      //     "A timeless design featuring layered drainage and humidity-loving plants to bring calm to your desk or shelf.",
      //   price: "N/A",
      // },
      // {
      //   name: "Hanging Orb Terrarium",
      //   image: "assets/terrarium_red_fittonia_on_desk.png",
      //   description:
      //     "A whimsical hanging orb perfect for small spaces and air plants.",
      //   details:
      //     "Suspended elegance showcasing airy tillandsia and decorative stones. Easy to care for and ideal for bright corners.",
      //   price: "N/A",
      // },
    ];

    vm.selectedProduct = {};

    vm.openDetails = function (product) {
      vm.selectedProduct = product;
    };
  }
})();
