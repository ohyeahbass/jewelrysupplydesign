var adminApp=angular.module('adminApp')
adminApp.controller('productsController', function($scope, productsService, getDBProducts, getLocalItems,$location, cartService){
    $scope.products = [];
    
    $scope.products = getDBProducts.data;
    
    $scope.addToCart=function(item){cartService.addToCart(item);}
    
    // $scope.getDBProduct=function(product){
    //      productService.setter(product)
    //      $location.path('/productPage')
    // }
    // $scope.getDBProduct=function(prod){
    //    productsService.getDBProduct(prod);
    // }
    $scope.filter=function(key){
        console.log('setting key: ', key);
        $scope.key=key
    }
})
