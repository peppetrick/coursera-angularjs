(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController ($scope,$filter) {
    $scope.checkLaunch = function() {
        if($scope.listForLunch){
        console.log($scope.$listForLunch);
        var list = $scope.listForLunch.split(",");
        if(list.length<4){ $scope.message = "Enjoy!"}
        else {$scope.message = "Too much!";}
        }
        else {$scope.message = "Please enter data first";}
      }
    };
})();
