function Player(board) {
  this.board = board;
}

Player.prototype = {
  moveSlot: function(event) {
    var key = event ? event.keyCode : event.which;
    switch(key) {
      case 37:
        this.board.moveSlotLeft();
        break;
      case 38:
        this.board.moveSlotUp();
        break;
      case 39:
        this.board.moveSlotRight();
        break;
      case 40:
        this.board.moveSlotDown();
        break;
    }
  }
}
