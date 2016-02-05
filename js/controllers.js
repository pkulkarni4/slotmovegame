(function(){
  'use strict';
  angular.module('MoveSlotGameApp')
  .controller('slotMoveGamecontroller', ['$scope', function($scope) {
    $scope.board = new Board();
    $scope.player = new Player($scope.board);
    $scope.data = {
      grid: $scope.board.getGridArray(),
    };
  }]);
})();
