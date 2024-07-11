/* Week 11
    javaScript file
    Author: Bob Ruzga
    Date: July 07, 2024
*/

// Class for Player
class onePlayer {
    constructor (name, iAmX) {
        this.name = name;
        this.iAmX = iAmX;
        this.count = 0;
    }
}

// Class for Players
class Players {
    constructor () {
        this.players = [];
    }

// Method to add Player to game
newPlayer(name, iAmX) {
    let p = new onePlayer(name, iAmX);
    this.players.push(p);
    return p;
}
}

$("#playersBtn").on("click", function() {
    let aGame = new Players();

    let p1 = $('#p1Name').val();
    let p2 = $('#p2Name').val();
    let whoX = $('#whoseX').val();

    console.log('Im in the click ' + p1 + " " + p2 + " " + whoX);

//  create players
    switch(whoX) {
        case '1':
        //player 1 is X
            aGame.newPlayer(p1, true);
            aGame.newPlayer(p2, false);
        break;
        case '2':
        //player 2 is X
            aGame.newPlayer(p1, false);
            aGame.newPlayer(p2, true);          
        break;
        default:
            alert('Incorrect Player Number')
    }

    console.log(aGame);
})
  