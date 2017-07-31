angular.module('meanhotel',['ngRoute'])
       .config(config);

function config($routeProvider,$locationProvider){
  $routeProvider
    .when('/',{
    templateUrl:'angular-app/hotel-list/hotels.html',
    controller: HotelsController,
    controllerAs: 'vm'
    })
    .when('/hotel/:id',{
    templateUrl:'angular-app/hotel-display/hotel.html',
    controller: HotelController,
    controllerAs: 'vm'
    });
  $locationProvider //fixes issue where links in angular wouldn't follow. aka hashbang issue
    .hashPrefix("");
    
}
