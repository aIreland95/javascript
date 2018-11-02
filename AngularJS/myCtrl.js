app.controller("myCtrl", function($scope, $http) {
  $scope.firstName = "Aaron";
  $scope.lastName = "Ireland";

  $http.get("table.php").then(function (response) {

    $scope.myData = response.data.records;
  });
});
