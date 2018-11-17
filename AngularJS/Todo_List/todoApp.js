let app = angular.module("todoApp", []);

app.controller("todoCtrl", function($scope, $http) {

    $scope.insertTodo = function() {

      $http.post(
        "todoCreate.php",
        {'Todo_item':$scope.Todo_item}
      ).success(function(data) {
          alert(data);
      });
    }
});
