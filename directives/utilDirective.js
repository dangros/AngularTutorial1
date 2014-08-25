(
    function(){
        var app = angular.module('util-directive',[]);

        app.directive("clickMsg2", function(){
            return function(scope, element) {
                element.bind("click", function() {
                    alert('hey yo');
                })

            }
        })
    }
    )();