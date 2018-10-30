app.controller("myCtrl", function($scope, $http) {
  $scope.firstName = "Aaron";
  $scope.lastName = "Ireland";

  $http.get("json_sample.html").then(function (response) {

    $scope.myData = response.data;
  });
});
