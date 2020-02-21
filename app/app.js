'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [])
  .component('greetUser', {
    template: '<p>Hello, {{$ctrl.user}}</p>',
    controller: function GreetUserController() {
      this.user = 'world';
    }
  });
