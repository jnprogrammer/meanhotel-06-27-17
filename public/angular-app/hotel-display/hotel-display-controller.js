angular.module('meanhotel')
       .controller('HotelController',HotelController);


function HotelController($http,$routeParams){
    var vm = this;
    vm.id = $routeParams.id;

    $http.get('api/hotels/' + id ).then(function(response){
        vm.hotels = response.data;
    });
}