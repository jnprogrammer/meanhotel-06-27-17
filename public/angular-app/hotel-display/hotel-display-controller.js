angular.module('meanhotel')
       .controller('HotelController',HotelController);


function HotelController($route,$routeParams,$window,hotelDataFactory, AuthFactory, jwtHelper){
    var vm = this;
    var id = $routeParams.id;

   hotelDataFactory.hotelDisplay(id).then(function(response){
        vm.hotels = response.data;
        vm.stars = getStarRating(response.data.stars);
    });

    function getStarRating(stars){
        return new Array(stars);
    }

    vm.isLoggedIn = function(){
        if(AuthFactory.isLoggedIn){
            return true;
        } else {
            return false;
        }
    };

    vm.addReview = function(){
        var token = jwtHelper.decodedToken($window.sessionStorage.token);
        var username = token.username;

        var postData={
            name: username,
            rating: vm.rating,
            review: vm.review
        };
        if(vm.reviewForm.$valid){
            hotelDataFactory.postReview(id,postData).then(function(response){
                if(response.status === 200){
                    $route.reload();
                }
            }).catch(function(error){
                console.log(error);
            });
        }else{
            vm.isSubmitted = true;
        }
    };
}