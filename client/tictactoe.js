$(document).ready(function(){
  let playerOneTurn = true;

  if(playerOneTurn) {
    $('#turnLabel').text("Player One's Turn");
  } else {
    $('#turnLabel').text("Player Two's Turn");
  }


//toggles peices on board
  $("td").click(function(){
    if(playerOneTurn) {
      $(this).toggleClass('selectedX');
      playerOneTurn = !playerOneTurn;
    } else {
      $(this).toggleClass('selectedO');
      playerOneTurn = !playerOneTurn;
    }
  });





});