$(document).ready(function() {
  let playerOneTurn = true;

//when user clicks, toogle peices on board and check to see if there is a winner
  $("td").click(function() {
    if(playerOneTurn) {
      $(this).toggleClass('selectedX');
      $('#turnLabel').text("Player Two's Turn");
      lookForWinner();
      playerOneTurn = !playerOneTurn;
    } else {
      $(this).toggleClass('selectedO');
      $('#turnLabel').text("Player One's Turn");
      lookForWinner();
      playerOneTurn = !playerOneTurn;
    }
  });

  $('button').click(function() {
    clearBoard()
  })

  function clearBoard() {
    console.log('in here')
    $('td').removeClass();
    $('td').addClass('noneSelected');
  }

  function lookForWinner(player) {
    //want to iterate through tic tac toe board and look to see if player who just went has won
    //if player won, 
      //announce that player has won
      //clear board using clearBoard function
  }


});