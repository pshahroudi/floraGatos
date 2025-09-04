(function() {
  'use strict';

  angular.module('floraGatos').component('contact', {
    templateUrl: 'js/components/contact/contact.template.html',
    controller: ContactController
  });

  function ContactController() {
    var vm = this;
    vm.formData = {};
    vm.sent = false;

    vm.submitForm = function(form) {
      if (form.$valid) {
        vm.sent = true;
      }
    };
  }
})();
