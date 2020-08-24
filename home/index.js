$(document).ready(function(){
  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
  }

  if(isMobile){
    // hide or show css
    $('.desktop').hide();
    spawnFirstImagesMobile();

    setInterval(function(){
       showSlidesMobileLeft();
    }, 6000);

    setInterval(function(){
       showSlidesMobileRight();
    }, 5000);

  } else {
    $('.mobile').hide();
    spawnFirstImagesDesktop();

    setInterval(function(){
       showSlidesLeft();
    }, 6000);

    setInterval(function(){
       showSlidesRight();
    }, 5000);

    setInterval(function(){
       showSlidesCenter();
    }, 11000);
  }

  var language = $('#page').text();

 // Mobile Exclusive
  $('#menuButtons').click(function() {
    $('p.mobileSubMenus:visible').each(function () {
      $(this).hide();
    });
  });

  // Menus functions
  $( "#coupleHeaderMobile" ).click(function() {
       if(!$('p.mobileSubMenus.couple').is(":visible")){
         $('p.mobileSubMenus:visible').each(function () {
           $(this).hide('slow');
         });
         $('.couple').slideDown(500).show();
       } else {
          $('p.mobileSubMenus:visible').each(function () {
            $(this).hide('slow');
          });
          $(this).css('background-color', '#ffffff');
       }
    });

  $( "#weddingHeaderMobile" ).click(function() {
     if(!$('p.mobileSubMenus.wedding').is(":visible")){
       $('p.mobileSubMenus:visible').each(function () {
         $(this).hide('slow');
       });
       $('.wedding').slideDown(500).show();
     } else {
        $('p.mobileSubMenus:visible').each(function () {
          $(this).hide('slow');
        });
        $(this).css('background-color', '#ffffff');
     }
  });

  $( "#brideHeaderMobile" ).click(function() {
      if(!$('p.mobileSubMenus.bride').is(":visible")){
        $('p.mobileSubMenus:visible').each(function () {
          $(this).hide('slow');
        });
        $('.bride').slideDown(500).show();
      } else {
        $('p.mobileSubMenus:visible').each(function () {
          $(this).hide('slow');
        });
        $(this).css('background-color', '#ffffff');
      }
  });

  $( "#groomHeaderMobile" ).click(function() {
    if(!$('p.mobileSubMenus.groom').is(":visible")){
      $('p.mobileSubMenus:visible').each(function () {
        $(this).hide('slow');
      });
      $('.groom').slideDown(500).show();
    } else {
        $('p.mobileSubMenus:visible').each(function () {
          $(this).hide('slow');
        });
        $(this).css('background-color', '#ffffff');
    }
   });

   $( "#travelHeaderMobile" ).click(function() {
       if(!$('p.mobileSubMenus.travel').is(":visible")){
         $('p.mobileSubMenus:visible').each(function () {
           $(this).hide('slow');
         });
         $('.travel').slideDown(500).show();
       } else {
           $('p.mobileSubMenus:visible').each(function () {
             $(this).hide('slow');
           });
           $(this).css('background-color', '#ffffff');
       }
      });

    $( "#languageHeaderMobile" ).click(function() {
      if(!$('p.mobileSubMenus.language').is(":visible")){
        $('p.mobileSubMenus:visible').each(function () {
          $(this).hide('slow');
        });
        $('.language').slideDown(500).show();
      } else {
        $('p.mobileSubMenus:visible').each(function () {
          $(this).hide('slow');
        });
        $(this).css('background-color', '#ffffff');
      }
    });

 // Desktop exclusive

 var currentMenu = '';

 // Menus functions
  $('th').hover(function() {
      $(this).css('background-color', '#380606')},
      function() {
        $(this).css('background-color', '');
  });

  $('td.main').hover(function() {
    $(this).css('background-color', '#eb4034')
    },
    function() {
      $(this).css('background-color', '');
  });

  $( "#coupleHeader" ).click(function() {
      if(currentMenu === $(this).attr("id")){
        $('td:visible').each(function () {
          $(this).css('visibility', 'hidden');
        });
        currentMenu = '';
      } else {
        $('td:visible').each(function () {
          $(this).css('visibility', 'hidden');
        });

        $('.couple').css('visibility', 'visible');
         currentMenu = $(this).attr("id");
      }
    });

  $( "#weddingHeader" ).click(function() {
    if(currentMenu === $(this).attr("id")){
      $('td:visible').each(function () {
        $(this).css('visibility', 'hidden');
      });
      currentMenu = '';
    } else {
      $('td:visible').each(function () {
        $(this).css('visibility', 'hidden');
      });

      $('.wedding').css('visibility', 'visible');
       currentMenu = $(this).attr("id");
    }
  });

  $( "#brideHeader" ).click(function() {
     if(currentMenu === $(this).attr("id")){
       $('td:visible').each(function () {
         $(this).css('visibility', 'hidden');
       });
       currentMenu = '';
     } else {
      $('td:visible').each(function () {
        $(this).css('visibility', 'hidden');
      });

      $('.bride').css('visibility', 'visible');
       currentMenu = $(this).attr("id");
     }
  });

  $( "#groomHeader" ).click(function() {
    if(currentMenu === $(this).attr("id")){
       $('td:visible').each(function () {
         $(this).css('visibility', 'hidden');
       });
       currentMenu = '';
    } else {
      $('td:visible').each(function () {
        $(this).css('visibility', 'hidden');
      });

      $('.groom').css('visibility', 'visible');
       currentMenu = $(this).attr("id");
    }
  });

  $( "#travelHeader" ).click(function() {
    if(currentMenu === $(this).attr("id")){
       $('td:visible').each(function () {
         $(this).css('visibility', 'hidden');
       });
       currentMenu = '';
    } else {
      $('td:visible').each(function () {
        $(this).css('visibility', 'hidden');
      });

      $('.travel').css('visibility', 'visible');
       currentMenu = $(this).attr("id");
    }
  });

  $( "#languageHeader" ).click(function() {
    if(currentMenu === $(this).attr("id")){
       $('td:visible').each(function () {
         $(this).css('visibility', 'hidden');
       });
       currentMenu = '';
    } else {
      $('td:visible').each(function () {
        $(this).css('visibility', 'hidden');
      });

      $('.language').css('visibility', 'visible');
       currentMenu = $(this).attr("id");
    }
  });

  // Global

  //Page redirection
  $("[id^='meetCouple']").click(function() {
    window.location.href = "../meetCouple/meetCouple" + language + ".html";
  });

  $("[id^='cheesy']").click(function() {
    window.location.href = "../cheesyStuff/cheesyStuff" + language + ".html";
  });

  $("[id^='ceremony']").click(function() {
    window.location.href = "../ceremony/ceremony" + language + ".html";
  });

 $("[id^='party']").click(function() {
    window.location.href = "../party/party" + language + ".html";
  });

  $("[id^='airplane']").click(function() {
   window.location.href = "../airplane/airplane" + language + ".html";
  });

  $("[id^='hotels']").click(function() {
    window.location.href = "../hotel/hotel" + language + ".html";
  });

  $("[id^='whatToDo']").click(function() {
    window.location.href = "../whatToDo/whatToDo" + language + ".html";
  });

  $("[id^='gifts']").click(function() {
    window.location.href = "../underConstruction/underConstruction" + language + ".html";
  });

  $("[id^='teamBride']").click(function() {
    window.location.href = "../teamBachelorette/teamBachelorette" + language + ".html";
  });

  $("[id^='bachelorette']").click(function() {
    window.location.href = "../underConstruction/underConstruction" + language + ".html";
  });

  $("[id^='teamGroom']").click(function() {
    window.location.href = "../teamBachelor/teamBachelor" + language + ".html";
  });

  $("[id^='bachelor']").click(function() {
    window.location.href = "../underConstruction/underConstruction" + language + ".html";
  });

  $("[id^='godParentsHeader']").click(function() {
    window.location.href = "../padrinos/padrinos" + language + ".html";
  });

  $("[id^='picturesHeader']").click(function() {
    window.location.href = "../underConstruction/underConstruction" + language + ".html";
  });

  $("[id^='contactHeader']").click(function() {
    window.location.href = "../contactUs/contactUs" + language + ".html";
  });

  $("[id^='espanol']").click(function() {
    window.location.href = "index_es.html";
  });

  $("[id^='english']").click(function() {
    window.location.href = "index.html";
  });

  $("[id^='french']").click(function() {
    window.location.href = "index_fr.html";
  });

});

function openMenu(){
  if($("#menus").is(":visible")){
    $('#menus').hide('slow');
  } else{
    $('#menus').slideDown(1000).show();
  }
}

var slideIndexLeft = Math.floor(Math.random() * 10);
var slideIndexCenter = Math.floor(Math.random() * 11);
var slideIndexRight = Math.floor(Math.random() * 9);
var slideIndexMobileLeft = Math.floor(Math.random() * 15);
var slideIndexMobileRight = Math.floor(Math.random() * 15);

function spawnFirstImagesDesktop(){
    $('.slideIndexLeft:eq(' + slideIndexLeft + ')').css('display', 'inline');
    $('.slideIndexCenter:eq(' + slideIndexCenter + ')').css('display', 'inline');
    $('.slideIndexRight:eq(' + slideIndexRight + ')').css('display', 'inline');
}

function spawnFirstImagesMobile(){
    $('.slideIndexMobileLeft:eq(' + slideIndexMobileLeft + ')').css('display', 'inline');
    $('.slideIndexMobileRight:eq(' + slideIndexMobileRight + ')').css('display', 'inline');
}

function showSlidesLeft() {
  $(".slideIndexLeft").hide();


  if (slideIndexLeft >= $('.slideIndexLeft').length) {slideIndexLeft = 0}

  $(".slideIndexLeft").each(function(i,object){
    if(i === slideIndexLeft){
        $(this).css('display', 'inline');
    }
  });

  slideIndexLeft++;
}

function showSlidesCenter() {
  $(".slideIndexCenter").hide();


  if (slideIndexCenter >= $('.slideIndexCenter').length) {slideIndexCenter = 0}

  $(".slideIndexCenter").each(function(i,object){
    if(i === slideIndexCenter){
        $(this).css('display', 'inline');
    }
  });

  slideIndexCenter++;
}

function showSlidesRight() {
  $(".slideIndexRight").hide();

  if (slideIndexRight >= $('.slideIndexRight').length) {slideIndexRight = 0}

  $(".slideIndexRight").each(function(i,object){
    if(i === slideIndexRight){
        $(this).css('display', 'inline');
    }
  });

  slideIndexRight++;
}

function showSlidesMobileLeft() {
  $(".slideIndexMobileLeft").hide();


  if (slideIndexMobileLeft >= $('.slideIndexMobileLeft').length) {slideIndexMobileLeft = 0}

  $(".slideIndexMobileLeft").each(function(i,object){
    if(i === slideIndexMobileLeft){
        $(this).css('display', 'inline');
    }
  });

  slideIndexMobileLeft++;
}

function showSlidesMobileRight() {
  $(".slideIndexMobileRight").hide();

  if (slideIndexMobileRight >= $('.slideIndexMobileRight').length) {slideIndexMobileRight = 0}

  $(".slideIndexMobileRight").each(function(i,object){
    if(i === slideIndexMobileRight){
        $(this).css('display', 'inline');
    }
  });

  slideIndexMobileRight++;
}