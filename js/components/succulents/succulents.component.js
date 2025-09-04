(function () {
  "use strict";

  angular.module("floraGatos").component("succulents", {
    templateUrl: "js/components/succulents/succulents.template.html",
    controller: SucculentsController,
  });

  function SucculentsController() {
    var vm = this;

    vm.products = [
      {
        name: "Mini Aloe Vera",
        image: "assets/succulent_aloe.svg",
        description:
          "Compact aloe perfect for sunny windowsills.",
        details:
          "Potted in a 4-inch ceramic pot with well-draining soil.",
        price: "15.00",
      },
      {
        name: "Echeveria Elegans",
        image: "assets/succulent_echeveria.svg",
        description:
          "Rosette forming succulent with blue-green leaves.",
        details:
          "Thrives in bright light; water sparingly.",
        price: "12.00",
      },
      {
        name: "Haworthia Zebra",
        image: "assets/succulent_haworthia.svg",
        description:
          "Distinctive striped succulent ideal for desks.",
        details:
          "Low-maintenance plant in a 3-inch pot.",
        price: "10.00",
      },
    ];

    vm.selectedProduct = {};

    vm.openDetails = function (product) {
      vm.selectedProduct = product;
    };
  }
})();
