app.controller("myCtrl", function($scope, $http) {

    $http.get("table.php").then(function (response) {
      $scope.myPHPData = response.data.records;
    })
});
