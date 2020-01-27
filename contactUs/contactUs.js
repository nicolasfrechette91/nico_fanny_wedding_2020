$(document).ready(function(){
    $("#email").bind('click', function () {
       window.location.href = $(this).attr('href');
    });
});