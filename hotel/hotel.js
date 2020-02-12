$(document).ready(function(){
   /* $("#email").bind('click', function () {
       window.location.href = $(this).attr('href');
    });*/

   $('#realPlazaButton').click(function() {
     $('.medrano').hide();
     $('.realPlaza').show();
     $(this).css('background-color', '#eb4034');
     $('#medranoButton').css('background-color', '');
   });

   $('#medranoButton').click(function() {
     $('.realPlaza').hide();
     $('.medrano').show();
     $(this).css('background-color', '#eb4034');
     $('#realPlazaButton').css('background-color', '');
   });
});