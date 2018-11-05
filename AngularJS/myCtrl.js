app.controller("myCtrl", function($scope, $http) {

    $http.get("json_info.php").then(function (response) {
      $scope.myPHPData = response.data.records;
    })
});
