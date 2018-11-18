let app = angular.module('todoApp', []);

app.controller('todoCtrl', function($scope, $http) {

$http.get("todolistRetrieve.php").then(function (response) {$scope.names = response.data.records;});

$scope.createTodo = function (newTask) {

  $http.post("todoCreate.php", {task:newTask});
}

});
