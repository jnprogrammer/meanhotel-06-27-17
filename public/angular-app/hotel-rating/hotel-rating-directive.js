// angular.module('meanhotel')
//        .directive('hotelRating',hotelRating);

// //<hotel-rating>

// function hotelRating(){
//     return{
//         restrict:'E',  // E - element A - attribute
//         template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-glass"> {{star}} </span>',
//         bindToController:true,
//         controller:'HotelController',
//         controllerAs:'vm',
//         scope:{
//             stars:'@'
//         }
//     }
// }

angular.module('meanhotel').component('hotelRating',{
    bindings:{
        stars:'='
    },
    template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-glass"> {{star}} </span>',
    controller:'HotelController',
    controllerAs:'vm'

});