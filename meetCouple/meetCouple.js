$(document).ready(function(){
     var language = $('#page').text();

     $(".imagePrevPage").click(function() {
         window.location.href = "../home/index" + language + ".html";
     });

     $(".imageNextPage").click(function() {
         window.location.href = "../hotel/hotel" + language + ".html";
     });
});