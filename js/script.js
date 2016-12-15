var app = angular.module('deejumbles', []);
app.controller('Main',['$scope', function ($scope) {
  $scope.bingo_tiles = [
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
  ];
  $scope.toggleTile = function(tile) {
    if (tile.state === "gray") {
      tile.state = "green";
    }
    if (tile.state === "green") {
      tile.state = "red";
    }
    if (tile.state === "red") {
      tile.state = "gray";
    }
  };
  $scope.bingoTileClasses = function(tile) {
    return "state-" + tile.state;
  };
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