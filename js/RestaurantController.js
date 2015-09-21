restaurantLister.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
    $scope.restaurants = [];
    $scope.addRestaurant = function() {
        $scope.restaurants.push({
            name: $scope.restaurantName,
            cuisine: $scope.restaurantCuisine,
            neighborhood: $scope.restaurantNeighborhood,
            price: $scope.price
            });
        $scope.restaurantName = null;
        $scope.restaurantCuisine = null;
        $scope.restaurantNeighborhood = null;
        $scope.price = null;

    };

    $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index, 1);
  };
});
