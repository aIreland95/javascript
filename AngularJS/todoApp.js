let app = angular.module("todoApp", []);
app.controller("todoCtrl", function($scope) {
    $scope.products = ["This", "Is", "Temporary"];
});
