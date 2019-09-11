class Game {
    constructor (board){
        this.board = board;
        this.players = this.createPlayers();
        this.ready = false;
    }

    /*
    * Returns Player's Token objects whose dropped properties are equal to false
    */
   get activePlayer(){
    return this.players.find(player => player.active);
    }

/* 
    *Creates 2 player objects
    *returns an array of 2 player objects
*/
    createPlayers(){
        const players = [new Player('Player 1', 1, '#e15258', true),
                        new Player('Player 2', 2, '#e59a13')];
        return players;
    }
    
    /*
    * Gets game ready for play
    */
    startGame(){
        
    }
}