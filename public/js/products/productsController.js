var adminApp=angular.module('adminApp')
adminApp.controller('productsController', function($scope, productsService, getDBProducts, getLocalItems,$location, cartService){
    $scope.products = [];
    
    $scope.products = getDBProducts.data;
    
    $scope.addToCart=function(item){
        cartService.addToCart(item);
    };
    
    $scope.filter=function(key){
        $scope.key=key;
    };
});
