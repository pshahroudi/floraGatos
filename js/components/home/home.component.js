(function () {
  "use strict";

  angular.module("floraGatos").component("home", {
    templateUrl: "js/components/home/home.template.html",
    controller: HomeController,
  });

  function HomeController() {
    var vm = this;
    vm.categories = [
      {
        name: "Terrariums",
        description: "Low-maintenance, perfect for desks under LED lights.",
        image: "assets/terrarium_on_desk.png",
        alt: "Glass terrarium on a desk",
      },
      {
        name: "Succulents",
        description: "Perfect for window decorations.",
        image: "assets/succulents_window.png",
        alt: "Succulent trio in ceramic pots",
      },
      {
        name: "Indoor House Plants",
        description: "Vibrant foliage for any room.",
        image: "assets/indoor_house_plants.png",
        alt: "Fiddle leaf fig in a living room",
      },
    ];
  }
})();
