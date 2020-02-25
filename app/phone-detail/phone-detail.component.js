'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams', function PhoneDetailController($http, $routeParams) {
        this.setImage = (imageUrl) => this.mainImageUrl = imageUrl;

        this.onDblClick = (imgUrl) => alert(`You dbl clicked image: ${imgUrl}`)

        $http.get('phones/' + $routeParams.phoneId + '.json').then(response => {
          this.phone = response.data;
          this.setImage(this.phone.images[0]);
        });
    }]
  });
