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

// Hides the gameboard until players are entered resultMsg until end of game
$(document).ready(function() {
    $('#gameBoard').toggle();
    $('#resultMsg').toggle();
})

// Declaring Global Variables
    var p1 = "Player 1 Name";
    var p2 = "Player 2 Name";
    var whoX = '0';
    var whoseTurn = "0";
    const xVal = "X";
    const oVal = "O";
    var gameBrd = [];   //Array keeps track of gameboard plays
    var playingTh = "Make Your Choice";
    let winnerLit = "WINNER!"
    let tries = 0;  //count the number of tries to see if its a tie game
    
// Function from HTML Form with two button: one add Players and X or O; Other button ends the game
// Players button
$("#playersBtn").on("click", function() {
    var aGame = new Players();
    var endTheGame = false;
        
    p1 = $('#p1Name').val();
    p2 = $('#p2Name').val();
    whoX = $('#whoseX').val();

    console.log('Im in the click ' + p1 + " " + p2 + " " + whoX);

    if (p1 != "" && p2 !="" && (whoX == '1' || whoX == '2')) {
    //  create players
       switch(whoX) {
          case '1':
            //player 1 is X
                aGame.newPlayer(p1, true);
                aGame.newPlayer(p2, false);
                $('#p1SbXO').text(xVal);
                $('#p2SbXO').text(oVal);
            break;
            case '2':
            //player 2 is X
                aGame.newPlayer(p1, false);
                aGame.newPlayer(p2, true);  
                $('#p1SbXO').text(oVal);
                $('#p2SbXO').text(xVal);
            break;
            default:
                alert('Incorrect Player Number - Must be either 1 or 2')
            }

        $('#p1SbName').text(p1);
        $('#p2SbName').text(p2);

         console.log(aGame);

         letsPlayTheGame();  
    } else {
            alert('Please enter Names for Player 1, 2 and choose whose X')
    }  // end of if test for valid input
    return                  
})

// End the Game button on HTML form
$("#endGameBtn1").on("click", function() {
    $('.thanks4Play').append(`<p id="endThxP">Thanks for Playing</p>`);
    console.log("ended the game");
    return;
})

// End the Game button added on result DIV in HTML
$("#endGameBtn2").on("click", function() {
    $('.thanks4Play').append(`<p id="endThxP">Thanks for Playing</p>`);
console.log("ended the game2");
return;
})

// Play again button added during end of game
$('#playAgainBtn').on('click', function(){
console.log('In Play Again Btn func');
location.reload();
/* $(document).ready(function() {
    // Reset all forms on the page
        $("form").each(function() {
        this.reset();
        })
        $("table").each(function() {
        this.reset();
        })
}) */
})
    
// Let's Play the Game Function
function letsPlayTheGame() {
    console.log('In Playing the Game function');
    
    // unhides the gameboard now that we have players
    $(document).ready(function() {
        $('#gameBoard').toggle();
    })
       
        // initialize the game board to 9 entries with " "
    for (i = 0; i < 9; i++) {
        gameBrd[i] = " ";
    }

    whoseTurn = whoX;  // Sets the 'X' player as the First Player
    if (whoseTurn == '1') {
        $('#th1Player').text(playingTh);
    } else {
        $('#th2Player').text(playingTh);
    }

    console.log(gameBrd);
    }  

// playTurn function
function playTurn() {
    console.log('playTurn function code. Testing try ' + tries);
    console.log(whoseTurn);
    let endGame = false;

//  Add game checking here
// winning array combos:
/*  012, 345, 678 rows
    036, 147, 258 cols
    048, 246      diag 
       
    if winner then set playingTh to "Winner*/

    if(whoseTurn == whoX) {
        if((gameBrd[0] == "X" && gameBrd[1] == "X" && gameBrd [2] == "X") ||
            (gameBrd[3] == "X" && gameBrd[4] == "X" && gameBrd [5] == "X") || 
            (gameBrd[6] == "X" && gameBrd[7] == "X" && gameBrd [8] == "X") || 
            (gameBrd[0] == "X" && gameBrd[3] == "X" && gameBrd [6] == "X") || 
            (gameBrd[1] == "X" && gameBrd[4] == "X" && gameBrd [7] == "X") || 
            (gameBrd[2] == "X" && gameBrd[5] == "X" && gameBrd [8] == "X") || 
            (gameBrd[0] == "X" && gameBrd[4] == "X" && gameBrd [8] == "X") || 
            (gameBrd[2] == "X" && gameBrd[4] == "X" && gameBrd [6] == "X")) {
                playingTh = winnerLit;
                endGame = true;
            } else { 
                console.log('No X winner' + whoseTurn + 'x is ' + whoX)}
    } else {
        if((gameBrd[0] == "O" && gameBrd[1] == "O" && gameBrd [2] == "O") ||
            (gameBrd[3] == "O" && gameBrd[4] == "O" && gameBrd [5] == "O") || 
            (gameBrd[6] == "O" && gameBrd[7] == "O" && gameBrd [8] == "O") || 
            (gameBrd[0] == "O" && gameBrd[3] == "O" && gameBrd [6] == "O") || 
            (gameBrd[1] == "O" && gameBrd[4] == "O" && gameBrd [7] == "O") || 
            (gameBrd[2] == "O" && gameBrd[5] == "O" && gameBrd [8] == "O") || 
            (gameBrd[0] == "O" && gameBrd[4] == "O" && gameBrd [8] == "O") || 
            (gameBrd[2] == "O" && gameBrd[4] == "O" && gameBrd [6] == "O")) {
                playingTh = winnerLit;
                endGame = true;
            } else { 
                console.log('No O winner' + whoseTurn + 'x is ' + whoX)}
    }
    
    if (playingTh == winnerLit) {
        if(whoseTurn == '1') {
            $('#th1Player').text(winnerLit);
        } else {
            $('#th2Player').text(winnerLit);
        }
    }

    if (tries == '8' && playingTh != winnerLit) {
            $('#th1Player').text('TIE');
            $('#th2Player').text('TIE');
            endGame = true; 
    }

    if (playingTh != winnerLit && tries < '8') {
        tries += 1;
            // end of turn set for next player skip this if there is a Winner
        if (whoseTurn == '1') {
                 whoseTurn = '2';
                $('#th1Player').text("");
                $('#th2Player').text(playingTh);
        } else {
                whoseTurn = '1';
                $('#th1Player').text(playingTh);
                $('#th2Player').text("");
            }
    }

    if (endGame == true){ 
        $('#resultMsg').toggle();
        // $('#resultMsg').append(`<br>`);
        // $('#resultMsg').append(`<img src="images/trophy.jpg" alt="trophy img" width="200" />`);
        // $('#resultMsg').append(`<button id="playAgainBtn" class="btn btn-info btn-sm text-center">Play Again</button>`);
        // $('#resultMsg').append(`<button id="endGameBtn2" class="btn btn-warning btn-sm">End the Game</button>`);
        // $('#resultMsg').append(`<br>`);
        if($('#th1Player').text() == "TIE") {
            $('#resultMsg').append(`<p>Game has ended in a TIE! Good Game </p>`);
        } else if ($('#th1Player').text() == winnerLit) {
            $('#resultMsg').append(`<p>We have a WINNER --- Congratulations ${p1}`);
        } else {
            $('#resultMsg').append(`<p>We have a WINNER --- Congratulations ${p2}`);
        }
     } 
    
    console.log(p1, p2, whoX, whoseTurn, tries);
}

// Next 9 functions used to select the square chosen by player

function sq1_Func() {
    
    if(whoseTurn == whoX) {
        $('#sq1Btn').text('X');
        gameBrd[0] = "X";   
    } else {
        $('#sq1Btn').text('O');
        gameBrd[0] = "O";
    }  
    $('#sq1Btn').prop('disabled', true);
    
} 

function sq2_Func() {
    if(whoseTurn == whoX) {
        $('#sq2Btn').text('X');
        gameBrd[1] = "X";   
    } else {
        $('#sq2Btn').text('O');
        gameBrd[1] = "O";
    }  
    $('#sq2Btn').prop('disabled', true);
    
} 

function sq3_Func() {
    if(whoseTurn == whoX) {
        $('#sq3Btn').text('X');
        gameBrd[2] = "X";   
    } else {
        $('#sq3Btn').text('O');
        gameBrd[2] = "O";
    }  
    $('#sq3Btn').prop('disabled', true);
} 

function sq4_Func() {
    if(whoseTurn == whoX) {
        $('#sq4Btn').text('X');
        gameBrd[3] = "X";   
    } else {
        $('#sq4Btn').text('O');
        gameBrd[3] = "O";
    }  
    $('#sq4Btn').prop('disabled', true);
} 

function sq5_Func() {
    if(whoseTurn == whoX) {
        $('#sq5Btn').text('X');
        gameBrd[4] = "X";   
    } else {
        $('#sq5Btn').text('O');
        gameBrd[4] = "O";
    }  
    $('#sq5Btn').prop('disabled', true);
} 

function sq6_Func() {
    if(whoseTurn == whoX) {
        $('#sq6Btn').text('X');
        gameBrd[5] = "X";   
    } else {
        $('#sq6Btn').text('O');
        gameBrd[5] = "O";
    }  
    $('#sq6Btn').prop('disabled', true);
} 

function sq7_Func() {
    if(whoseTurn == whoX) {
        $('#sq7Btn').text('X');
        gameBrd[6] = "X";   
    } else {
        $('#sq7Btn').text('O');
        gameBrd[6] = "O";
    }  
    $('#sq7Btn').prop('disabled', true);
} 

function sq8_Func() {
    if(whoseTurn == whoX) {
        $('#sq8Btn').text('X');
        gameBrd[7] = "X";   
    } else {
        $('#sq8Btn').text('O');
        gameBrd[7] = "O";
    }  
    $('#sq8Btn').prop('disabled', true);;
} 

function sq9_Func() {
    if(whoseTurn == whoX) {
        $('#sq9Btn').text('X');
        gameBrd[8] = "X";   
    } else {
        $('#sq9Btn').text('O');
        gameBrd[8] = "O";
    }  
    $('#sq9Btn').prop('disabled', true);
} 
