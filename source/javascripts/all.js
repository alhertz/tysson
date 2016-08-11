//= require vendor/jquery/dist/jquery.js

$(function() {
  $('.band-photograph').fadeIn(500);

  function showSocialLinks(){
    $('.social').fadeIn(500);
  }

  function showSubscribeButton(){
    $('.subscribe').fadeIn(500);
  }

  function showWordmark(){
    $('.wordmark').fadeIn(500);
  }

  function showSpotifyLink(){
    $('.listen-link').fadeIn(500);
  }

  function showIsland(){
    $('.island').fadeIn(1000);
  }

  setTimeout(showWordmark, 500);
  setTimeout(showSubscribeButton, 600);
  setTimeout(showSocialLinks, 700);
  setTimeout(showSpotifyLink, 800);
  setTimeout(showIsland, 1000);
});

