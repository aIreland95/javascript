let app = angular.module("todoApp", []);

app.controller("todoCtrl", '$scope','$http', function($scope) {

  getList();

  function getList() {

    $http.post('todoRead.php').success(function(data){

      $scope.details = data;
    })
  }
});
