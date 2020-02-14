$(document).ready(function(){
   $('#montrealButton').click(function() {
     $('.toronto').hide();
     $('.edmonton').hide();
     $('.montreal').show();
     $(this).css('background-color', '#eb4034');
     $('#torontoButton').css('background-color', '');
     $('#edmontonButton').css('background-color', '');
   });

   $('#torontoButton').click(function() {
     $('.montreal').hide();
     $('.edmonton').hide();
     $('.toronto').show();
     $(this).css('background-color', '#eb4034');
     $('#montrealButton').css('background-color', '');
     $('#edmontonButton').css('background-color', '');
   });

   $('#edmontonButton').click(function() {
     $('.montreal').hide();
     $('.toronto').hide();
     $('.edmonton').show();
     $(this).css('background-color', '#eb4034');
     $('#montrealButton').css('background-color', '');
     $('#torontoButton').css('background-color', '');
   });

     var language = $('#page').text();

     $(".imagePrevPage").click(function() {
         window.location.href = "../home/index" + language + ".html";
     });

     $(".imageNextPage").click(function() {
         window.location.href = "../hotel/hotel" + language + ".html";
     });
});