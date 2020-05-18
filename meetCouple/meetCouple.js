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
      } else {
        $('.mobile').hide();
      }

     var language = $('#page').text();

     $(".imagePrevPage").click(function() {
         window.location.href = "../home/index" + language + ".html";
     });

     $(".imageNextPage").click(function() {
         window.location.href = "../hotel/hotel" + language + ".html";
     });

     var topPosition = 0;
     var leftPosition = 0;
     var isImageShrinked = false;

    function specialSlide(el, properties, isFanny){
        el.css({
            position: 'static'
        });
        var origPos = el.position();
        el.css({
            position: 'absolute',
            cursor: 'default',
            margin: '0px',
            padding: '30vh 0',
            width: '-=28vh',
            height: '-=28vh',
            top: origPos.top,
            left: origPos.left
        }).animate({top: properties.top, left: properties.left, deg: -360}, {
            duration: 2000 , step: function(now) {
               el.css({
                   transform: 'rotate(' + now + 'deg)'
               });
            }
        }).animate({top: properties.top, left: properties.left}, 100,
        function() {
            if(isFanny){
                $('.fannyAboutNico').show();
                $('.fannyAboutFanny').show();
            } else {
              $('.nicoAboutFanny').show();
              $('.nicoAboutNico').show();
            }
            $('.mainImagesContainer').css({'padding-bottom': '0'});
            $('.imageLeftContainer').css({'width': '0'});
            $('.imageRightContainer').css({'width': '0'});
        });
    }

    function undoSpecialSlide(el, properties){
        el.css({
            position: 'static'
        });
        var origPos = el.position();
        var origPos = $('.meetCoupleHeaderNico').position();
        el.css({
            'z-index': '-1',
            position: 'absolute',
            cursor: 'pointer',
            top: origPos.top,
            left: origPos.left,
            deg: 360,
        }).animate({top: properties.top, left: properties.left, deg: 360}, {
            duration: 2000, step: function(now) {
                el.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        }).animate({'z-index': '0', width: '+=28vh', height: '+=28vh', margin: '0 15vh', padding: '0',}, 250,
        function() {
          $(".imageMainLeft").show();
          $(".imageMainRight").show();
          if(isMobile){
             $(".meetCoupleBottomMobile").show();
          } else {
             $(".meetCoupleBottom").show();
          }

          $(".prevNextButtons").show();
          $(".returnTable").hide();
          $(".meetCoupleHeader").show();
          $('.mainImagesContainer').css({'padding-bottom': '40vh'});
        });
    }

     $(".imageMainRight").click(function() {
        if (!isImageShrinked) {
            $(".imageMainLeft").hide();
            $(".meetCoupleBottomMobile").hide();
            $(".meetCoupleBottom").hide();
            $(".meetCoupleHeader").hide();
            $(".meetCoupleHeaderNico").show();
            $(".prevNextButtons").hide();
            $(".returnTable").show();
            $(this).removeClass("imageMainRight");
            $(this).addClass("tempImageMainRight");

            // Save the current position
            var currentPosition = $(this).position();
            topPosition = currentPosition.top;
            leftPosition = currentPosition.left;

            // Fetch the desired ending position and go there.
            var headerPositions = $('.meetCoupleHeaderNico').position();
            var props = {'top' : headerPositions.top, 'left' : headerPositions.left};
            specialSlide($('.tempImageMainRight'), props, false);
            isImageShrinked = true;
        }
     });

     $(".imageMainLeft").click(function() {
        if (!isImageShrinked) {
            $(".imageMainRight").hide();
            $(".meetCoupleBottomMobile").hide();
            $(".meetCoupleBottom").hide();
            $(".meetCoupleHeader").hide();
            $(".meetCoupleHeaderFanny").show();
            $(".prevNextButtons").hide();
            $(".returnTable").show();
            $(this).removeClass("imageMainLeft");
            $(this).addClass("tempImageMainLeft");

             // Save the current position
             var currentPosition = $(this).position();
             topPosition = currentPosition.top;
             leftPosition = currentPosition.left;

             // Fetch the desired ending position and go there.
             var headerPositions = $('.meetCoupleHeaderFanny').position();
             var props = {'top' : headerPositions.top, 'left' : headerPositions.left};
             specialSlide($('.tempImageMainLeft'), props, true);
             isImageShrinked = true;
         }
     });

     $(".imageReturnPage").click(function() {
       returnToDefaultState();
    });

    $(".return").click(function() {
      returnToDefaultState();
    });

    function returnToDefaultState(){
        $(".meetCoupleHeaderNico").hide();
        $(".meetCoupleHeaderFanny").hide();
        $(".returnTable").hide();
        $('.fannyAboutNico').hide();
        $('.fannyAboutFanny').hide();
        $('.nicoAboutFanny').hide();
        $('.nicoAboutNico').hide();

        $('.imageLeftContainer').css({'width': '50%'});
        $('.imageRightContainer').css({'width': '50%'});


        //var heightAdjustment = $(window).height() * 1 / 100;
        var props = {'top' : topPosition, 'left' : leftPosition};
        if ($(".tempImageMainLeft")[0]){
          undoSpecialSlide($('.tempImageMainLeft'), props);
          $('.tempImageMainLeft').addClass("imageMainLeft");
          $('.tempImageMainLeft').removeClass("tempImageMainLeft");
        } else {
          undoSpecialSlide($('.tempImageMainRight'), props);
          $('.tempImageMainRight').addClass("imageMainRight");
          $('.tempImageMainRight').removeClass("tempImageMainRight");
        }
        isImageShrinked = false;
    }
});