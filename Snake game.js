function moveup() {
    if(myGamePiece.speedY == 0) {
        myGamePiece.speedX = 0;
      myGamePiece.speedY = -30;
    }
}

function movedown() {
    if(myGamePiece.speedY == 0) {
        myGamePiece.speedX = 0;
      myGamePiece.speedY = 30;
    }
}

function moveleft() {
    if(myGamePiece.speedX == 0) {
        myGamePiece.speedY = 0;
      myGamePiece.speedX = -30;
    }
}

function moveright() {
    if(myGamePiece.speedX == 0) {
        myGamePiece.speedY = 0;
      myGamePiece.speedX = 30;
