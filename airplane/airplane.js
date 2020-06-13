$(document).ready(function(){
   $('#montrealButton').click(function() {
     $('.toronto').hide();
     $('.edmonton').hide();
     if ($('#montrealButton').css('background-color') === 'rgb(235, 64, 52)') {
        $('.montreal').hide();
        $('#montrealButton').css('background-color', '');
     } else {
        $('.montreal').show();
        $(this).css('background-color', '#eb4034');
        $('#torontoButton').css('background-color', '');
        $('#edmontonButton').css('background-color', '');
     }
   });

   $('#torontoButton').click(function() {
     $('.montreal').hide();
     $('.edmonton').hide();
     if ($('#torontoButton').css('background-color') === 'rgb(235, 64, 52)') {
         $('.toronto').hide();
         $('#torontoButton').css('background-color', '');
     } else {
         $('.toronto').show();
         $(this).css('background-color', '#eb4034');
         $('#montrealButton').css('background-color', '');
         $('#edmontonButton').css('background-color', '');
     }
   });

   $('#edmontonButton').click(function() {
     $('.montreal').hide();
     $('.toronto').hide();
     if ($('#edmontonButton').css('background-color') === 'rgb(235, 64, 52)') {
        $('.edmonton').hide();
        $('#edmontonButton').css('background-color', '');
     } else {
         $('.edmonton').show();
         $(this).css('background-color', '#eb4034');
         $('#montrealButton').css('background-color', '');
         $('#torontoButton').css('background-color', '');
     }
   });

     var language = $('#page').text();

     $(".imagePrevPage").click(function() {
         window.location.href = "../home/index" + language + ".html";
     });

     $(".imageNextPage").click(function() {
         window.location.href = "../hotel/hotel" + language + ".html";
     });
});