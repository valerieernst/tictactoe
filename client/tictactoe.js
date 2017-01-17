$(document).ready(function() {
  let playerOneTurn = true;

//toggles peices on board
  $("td").click(function() {
    if(playerOneTurn) {
      $(this).toggleClass('selectedX');

      $('#turnLabel').text("Player Two's Turn");
      playerOneTurn = !playerOneTurn;
    } else {
      $(this).toggleClass('selectedO');
      $('#turnLabel').text("Player One's Turn");
      playerOneTurn = !playerOneTurn;
    }
  });

  $('button').click(function() {
    $('td').removeClass();
    $('td').addClass('noneSelected');
    console.log('this works')
  })




});