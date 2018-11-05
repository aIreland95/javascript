app.controller("myCtrl", function($scope, $http) {
    $scope.firstName = "Matthew";
    $scope.lastName= "Penning";

    $http.get("json_sample.html").then(function (response) {
      $scope.myData = response.data.records;
    });

    $http.get("json_info.php").then(function (response) {
      $scope.myPHPData = response.data.records;
    })
});
