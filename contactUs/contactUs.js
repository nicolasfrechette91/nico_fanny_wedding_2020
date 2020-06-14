$(document).ready(function(){
    $("#email").bind('click', function () {
       window.location.href = $(this).attr('href');
    });

    var language = $('#page').text();

    $(".imagePrevPage").click(function() {
      window.location.href = "../hotel/hotel" + language + ".html";
    });
});