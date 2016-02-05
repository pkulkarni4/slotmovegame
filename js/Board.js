function Board() {
  this.gridArray = this.generateGridArray();
  this.SLOT = "";
}

Board.prototype = {
  getGridArray: function(){
    return this.gridArray;
  },
  generateGridArray: function(){

    //for (var a=[],i=1;i<=8;i++) a[i]=i;
    var a = new Array(3);

    for(var i=0;i<3;i++){
      a[i]=new Array(3);
    }

    var count = 0;
    for(var j=0;j<3;j++){
      for(var k=0;k<3;k++){
        a[j][k] = ++count;
      }
    }

   // randomize the array.
    a = this.shuffle(a);

    // Make 9 as slot
    for(j=0;j<3;j++){
      for(k=0;k<3;k++){
        if(a[j][k] == 9){
          this.curSlotRow = j;
          this.curSlotCol = k;
          break;
        }
      }
    }

    // Set the slot
    a[this.curSlotRow][this.curSlotCol]=this.SLOT;


  return a;
},

shuffle: function (a) {
  var randomRowIndex = this.getRandomInt(0, 2);
  var randomColIndex = this.getRandomInt(0, 2);
  for(var j=0;j<3;j++){
    for(var k=0;k<3;k++){
      var temp = a[randomRowIndex][randomColIndex];
      a[randomRowIndex][randomColIndex] = a[j][k];
      a[j][k] = temp;
   }
  }
  return a;
},
swap: function(){},
moveSlotLeft: function(){
  if(this.curSlotCol-1 >= 0){
    var temp = this.gridArray[this.curSlotRow][this.curSlotCol-1];
    this.gridArray[this.curSlotRow][this.curSlotCol-1]=this.SLOT;
    this.gridArray[this.curSlotRow][this.curSlotCol]=temp;

    this.curSlotCol = this.curSlotCol-1;
  }
},
moveSlotRight: function(){
  if(this.curSlotCol+1 < 3) {
    var temp = this.gridArray[this.curSlotRow][this.curSlotCol+1];
    this.gridArray[this.curSlotRow][this.curSlotCol+1]=this.SLOT;
    this.gridArray[this.curSlotRow][this.curSlotCol]=temp;

    this.curSlotCol = this.curSlotCol+1;
  }
},
moveSlotUp: function(){
  if(this.curSlotRow-1 >= 0){
    var temp = this.gridArray[this.curSlotRow-1][this.curSlotCol];
    this.gridArray[this.curSlotRow-1][this.curSlotCol]=this.SLOT;
    this.gridArray[this.curSlotRow][this.curSlotCol]=temp;

    this.curSlotRow = this.curSlotRow-1;
  }
},
moveSlotDown: function(){
  if(this.curSlotRow+1 < 3){
    var temp = this.gridArray[this.curSlotRow+1][this.curSlotCol];
    this.gridArray[this.curSlotRow+1][this.curSlotCol]=this.SLOT;
    this.gridArray[this.curSlotRow][this.curSlotCol]=temp;

    this.curSlotRow = this.curSlotRow+1;
  }
},
getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
}
