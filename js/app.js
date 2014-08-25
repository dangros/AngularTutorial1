
(

    function() {
    var app = angular.module('gemStore', ['util-directive']);
    var dansProducts = [{ name: 'Apple', category:'fruit', canPurchase: true, soldOut: false, price: 34.44},
        { name: 'Orange', category:'fruit2', canPurchase: true, soldOut: false, price: 1.32}];

            app.controller('StoreController', function(){
            this.products = dansProducts;
            this.tab = 1;

            this.isCurrentTab = function(tab) {
                return this.tab == tab;
            };
            this.setCurrentTab = function(tab) {
                this.tab = tab;
            }
        });

    app.directive('bla', function() {
        return {
            restrict: 'E',
            templateUrl: '../directives/store.html',
            controller: function(){
                this.products = dansProducts;
                this.tab = 1;

                this.isCurrentTab = function(tab) {
                    return this.tab == tab;
                };
                this.setCurrentTab = function(tab) {
                    this.tab = tab;
                }
            },
            controllerAs: 'strController'
        }
    });
})();