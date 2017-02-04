class TicTacToe {
    constructor(gameField, currentPlayerSumbol, winner) {
      this.currentPlayerSumbol = currentPlayerSumbol = "x";
      this.winner = winner;

      this.gameField = [
        [null, null ,null],
        [null, null ,null],
        [null, null ,null]
      ];
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayerSumbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if ( this.gameField[rowIndex][columnIndex] ){
        return;
      } else {
        this.gameField[rowIndex][columnIndex] = this.currentPlayerSumbol;
      }

      if ( this.currentPlayerSumbol == "x" ){
        this.currentPlayerSumbol = "o";
      } else { this.currentPlayerSumbol = "x"; }
    }

    isFinished() {
      if (this.getWinner() || this.noMoreTurns() === true){
        return true;
      } else return false;
    }

    getWinner() {
      var gameField = this.gameField,
          countX = 0,
          countO = 0;

          this.winner = null;

      for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
          if ( gameField[i][j] == "x" ){
            countX++;
          } else if (gameField[i][j] == "o"){
            countO++;
          }
        }

        if (countX == 3){
          this.winner = "x";
          return this.winner;
        } else if ( countO == 3){
          this.winner = "o";
          return this.winner;
        }
        countX = 0;
        countO = 0;
      }
      //--------------------------------------------
      for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
          if ( gameField[j][i] == "x" ){
            countX++;
          } else if (gameField[j][i] == "o"){
            countO++;
          }
        }

        if (countX == 3){
          this.winner = "x";
          return this.winner;
        } else if ( countO == 3){
          this.winner = "o";
          return this.winner;
        }
        countX = 0;
        countO = 0;
      }
      //============================================
      for (let i = 0; i < 3; i++){
          if ( gameField[i][i] == "x" ){
            countX++;
          } else if (gameField[i][i] == "o"){
            countO++;
          }

        if (countX == 3){
          this.winner = "x";
          return this.winner;
        } else if (countO == 3){
          this.winner = "o";
          return this.winner;
        }
      }
      countX = 0;
      countO = 0;
      //--------------------------------------------
      for (let i = 0; i < 3; i++){
        if ( gameField[i][2 - i] == "x" ){
          countX++;
        } else if ( gameField[i][2 - i] == "o" ){
          countO++;
        }

        if (countX == 3){
          this.winner = "x";
          return this.winner;
        } else if (countO == 3){
          this.winner = "o";
          return this.winner;
        }
      }
      return null;
    }

    noMoreTurns() {
      for(let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
          if (this.gameField[i][j] === null) {
            return false;
          }
        }
      }
      return true;
    }

    isDraw() {
      if (this.getWinner() === null && this.noMoreTurns() === true){
        return true;
      } else return false;
    }

    getFieldValue(rowIndex, colIndex) {
      if ( this.gameField[rowIndex][colIndex] ) {
        return this.gameField[rowIndex][colIndex];
      } else return null;
    }
}

module.exports = TicTacToe;
