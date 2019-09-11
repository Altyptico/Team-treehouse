class Player{
    constructor (name, id, color, isTurn = false, tokens){
        this.name = name;
        this.id = id;
        this.color = color;
        this.isTurn = inTurn;
        this.tokens = this.createTokens(21);
    }
    /*Creates token objects for player
    *num - Number of token objects to be created
    */
    createTokens(num){
            const tokens = [];

            for (let i = 0; i < num; i++) {
                let token = new Token(i, this);
                tokens.push(token);
            }
            return tokens;
    }
    /*
    * Gets all tokens that haven't been dropped
    * Returns Player's unused Token objects 
    */
    get unusedTokens(){
        return this.tokens.filter();

   }
   /*
    * Gets the active token by returning the first token in the array of unused tokens.
    */
   get activeToken(){
    return this.unusedTokens[0];
    }
}