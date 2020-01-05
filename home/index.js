$(document).ready(function(){

  var language = $('#page').text();

  $('th').hover(function() {
    $(this).css('background-color', '#380606');
  });

  $('th').hover(function() {
      $(this).css('background-color', '#380606')},
      function() {
        $(this).css('background-color', '')
  });

  $('td').hover(function() {
      $(this).css('background-color', '#380606');
    });

    $('td').hover(function() {
        $(this).css('background-color', '#380606')},
        function() {
          $(this).css('background-color', '')
    });

//  add effect of dropping down
  $( "#weddingHeader" ).click(function() {
    $('td:visible').each(function () {
      $(this).css('visibility', 'hidden');
    });
    $('.wedding').css('visibility', 'visible');
  });

  $( "#brideHeader" ).click(function() {
    $('td:visible').each(function () {
      $(this).css('visibility', 'hidden');
    });
    $('.bride').css('visibility', 'visible');
  });

  $( "#groomHeader" ).click(function() {
    $('td:visible').each(function () {
        $(this).css('visibility', 'hidden');
    });
    $('.groom').css('visibility', 'visible');
  });

  $( "#languageHeader" ).click(function() {
    $('td:visible').each(function () {
      $(this).css('visibility', 'hidden');
    });
    $('.language').css('visibility', 'visible');
  });

  //Page redirection
  $('#coupleHeader').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#ceremony').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#party').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#hotels').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#gifts').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#teamBride').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#bachelorette').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#teamGroom').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#bachelor').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#godParentsHeader').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#cheesyHeader').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#picturesHeader').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#contactHeader').click(function() {
    window.location.href = "../underConstruction" + language + ".html";
  });

  $('#espanol').click(function() {
    window.location.href = "index_es.html";
  });

  $('#english').click(function() {
    window.location.href = "index.html";
  });

  $('#french').click(function() {
    window.location.href = "index_fr.html";
  });

});