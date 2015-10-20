var adminApp=angular.module('adminApp')
adminApp.controller('productsController', function($scope, productsService, getDBProducts, getLocalItems){
$scope.products = [];
$scope.arr      = [];

$scope.products = getDBProducts;
$scope.arr = getLocalItems;


$scope.addToCart = function(item) {
    var checkItem = false;
    var items = {
        qty: 1,
        _id: item._id,
        name: item.name,
        price: item.price,
        img1: item.img1
        
    }

    $scope.arr.forEach(function(cartItem) {
        if(cartItem._id === item._id) {
            cartItem.qty++;
            checkItem = true;
        }
    });

    if(checkItem === false) {
        $scope.arr.push(items);
    }
    localStorage.setItem('text', JSON.stringify($scope.arr));
    return $scope.arr;
}

})
