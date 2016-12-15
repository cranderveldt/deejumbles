var app = angular.module('deejumbles', []);
app.controller('Main',['$scope', function ($scope) {
  $scope.cards = [[
    { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
  ], [
    { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
    , { state: "gray" }
  ]];
  $scope.toggleTile = function(tile) {
    if (tile.state === "gray") {
      tile.state = "green";
    } else if (tile.state === "green") {
      tile.state = "red";
    } else if (tile.state === "red") {
      tile.state = "gray";
    }
  };
  $scope.bingoTileClasses = function(tile) {
    return "state-" + tile.state;
  };
  $scope.randomSecureString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };
  $scope.randomTitle = function() {
    return "Isaac Bingo - " + $scope.randomSecureString(5);
  };
  document.title = $scope.randomTitle();
}]);
// app.directive('tlRotate', function () {
//   return {
//     replace: false,
//     transclude: false,
//     restrict: 'A',
//     scope: false,
//     link: function ($scope, element, attrs) {
      
//     }
//   };
// });