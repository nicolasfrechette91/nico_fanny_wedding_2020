$(document).ready(function(){

    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
    }

    showHideMobile(isMobile);

    generateMap();

//  $("[id$='Button']").click(function() {
//    var fullID = $(this).attr('id');
//    var currentButtonName = fullID.split('Button')[0];
//
//    $('.showHide').hide();
//    $("[id$='SubMenu'").css('background-color', '');
//    if ($(this).css('background-color') === 'rgb(235, 64, 52)') {
//        unselectEveryButtons();
//    } else {
//        unselectEveryButtons();
//        $('.' + currentButtonName + 'SubMenu').show();
//        $('.' + currentButtonName).show();
//        $(this).css('background-color', '#eb4034');
//    }
//  });
//

  $("[id$='SubMenu']").click(function() {
    var fullID = $(this).attr('id');
    var currentButtonName = fullID.split('SubMenu')[0];

    $('.showHide').hide();
    if ($(this).css('background-color') === 'rgb(235, 64, 52)') {
        $('.prevNextButtons').css('padding-top', '200px');
        $(this).css('background-color', '');
        $('.' + currentButtonName).hide();
    } else {
        $("[id$='SubMenu'").css('background-color', '');
        $('.' + currentButtonName).show();
        $('.prevNextButtons').css('padding-top', '0px');
        $(this).css('background-color', '#eb4034');
    }
  });

   $('#timelineButton').click(function() {
     $('.recipe').hide();
     $('.world').hide();
     $("[id$='SubMenu'").css('background-color', '');
     $('.recipeSubMenu').hide();
     if ($('#timelineButton').css('background-color') === 'rgb(235, 64, 52)') {
        $('.prevNextButtons').css('padding-top', '200px');
        $('.timelineContainer').hide();
        $('#timelineButton').css('background-color', '');
     } else {
        $('.prevNextButtons').css('padding-top', '0px');
        $('.timelineContainer').show();
        $(this).css('background-color', '#eb4034');
        $('#recipeButton').css('background-color', '');
        $('#worldButton').css('background-color', '');
     }
   });

   $('#recipeButton').click(function() {
     $('.prevNextButtons').css('padding-top', '200px');
     $('.timelineContainer').hide();
     $('.world').hide();
     $("[id$='SubMenu'").css('background-color', '');
     if ($('#recipeButton').css('background-color') === 'rgb(235, 64, 52)') {
        $('.recipe').hide();
        $('.recipeSubMenu').hide();
        $('#recipeButton').css('background-color', '');
     } else {
         $('.recipe').show();
         $('.recipeSubMenu').show();
         $(this).css('background-color', '#eb4034');
         $('#timelineButton').css('background-color', '');
         $('#worldButton').css('background-color', '');
     }
   });

   $('#worldButton').click(function() {
     $('.timelineContainer').hide();
     $('.recipe').hide();
     $("[id$='SubMenu'").css('background-color', '');
     $('.recipeSubMenu').hide();
     if ($('#worldButton').css('background-color') === 'rgb(235, 64, 52)') {
        $('.prevNextButtons').css('padding-top', '200px');
        $('.world').hide();
        $('#worldButton').css('background-color', '');
     } else {
         $('.prevNextButtons').css('padding-top', '0px');
         $('.world').show();
         $(this).css('background-color', '#eb4034');
         $('#timelineButton').css('background-color', '');
         $('#recipeButton').css('background-color', '');
     }
   });

     $(".accordionContainer").click(function() {
        if($(this).hasClass('isOpen')){
            var id = $(this).attr("id");
            $('.isOpenSub.' + id).find( "div.imageContainer" ).hide(400);
            $('.isOpenSub.' + id).removeClass('isOpenSub');
            $('.' + id).slideToggle(800);
            $(this).removeClass('isOpen');
        } else {
            $(this).addClass('isOpen');
            var id = $(this).attr("id");
            $('.isOpenSub.' + id).find( "div.imageContainer" ).hide(400);
            $('.' + id).slideToggle(800);
        }
     });

     $(".accordionSubContainer").click(function() {
        if($(this).hasClass('isOpenSub')){
            $(this).find( "div.imageContainer" ).slideToggle(800);
            $(this).removeClass('isOpenSub');
        } else {
            $(this).addClass('isOpenSub');
            $(this).find( "div.imageContainer" ).slideToggle(800);
        }
     });

     var language = $('#page').text();

     $(".imagePrevPage").click(function() {
         window.location.href = "../meetCouple/meetCouple" + language + ".html";
     });

     $(".imageNextPage").click(function() {
         window.location.href = "../home/index" + language + ".html";
     });
});

function showHideMobile(isMobile){
    if(isMobile){
        // hide or show css
        $('.desktop').hide();
      } else {
        $('.mobile').hide();
    }
}

function unselectEveryButtons(){
    $('#timelineButton').css('background-color', '');
    $('#recipeButton').css('background-color', '');
    $('#worldButton').css('background-color', '');
    $("[class$='SubMenu'").hide();
}

function generateMap(){
  var language = $('#page').text();
  if(language === '_fr'){
    $('#world-map-markers').vectorMap({
      map: 'world_mill',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      markerStyle: {
        initial: {
          fill: '#f83b3b',
          stroke: '#383f47'
        }
      },
      backgroundColor: '#383f47',
      markers: [
        {latLng: [45.50, -73.56], name: 'Montréal 2016'},
        {latLng: [43.65, -79.38], name: 'Toronto 2017'},
        {latLng: [9.75, -83.75], name: 'San José 2017'},
        {latLng: [53.54, -113.49], name: 'Edmonton 2018'},
        {latLng: [51.04, -114.07], name: 'Calgary 2018'},
        {latLng: [51.18, -115.57], name: 'Banff 2018'},
        {latLng: [52.23, 21.01], name: 'Varsovie 2018'},
        {latLng: [51.10, 17.04], name: 'Wroclaw 2018'},
        {latLng: [50.08, 14.44], name: 'Prague 2018'},
        {latLng: [48.21, 16.37], name: 'Vienne 2018'},
        {latLng: [39.74, -104.99], name: 'Denver 2018'},
        {latLng: [21.02, -101.26], name: 'Guanajuato 2018'},
        {latLng: [21.88, -102.29], name: 'Aguascalientes 2018'},
        {latLng: [51.46, -112.71], name: 'Drumheller 2019'},
        {latLng: [43.47, -79.69], name: 'Oakville 2019'},
        {latLng: [35.68, 139.65], name: 'Tokyo 2019'},
        {latLng: [35.96, 138.22], name: 'Hara 2019'},
        {latLng: [44.63, -81.26], name: 'Plage de Sauble 2020'},
        {latLng: [45.25, -81.66], name: 'Tobermory 2020'},
        {latLng: [49.28, -123.12], name: 'Vancouver 2020'}
      ]
    });
  } else if (language === '_es') {
    $('#world-map-markers').vectorMap({
      map: 'world_mill',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      markerStyle: {
        initial: {
          fill: '#f83b3b',
          stroke: '#383f47'
        }
      },
      backgroundColor: '#383f47',
      markers: [
        {latLng: [45.50, -73.56], name: 'Montreal 2016'},
        {latLng: [43.65, -79.38], name: 'Toronto 2017'},
        {latLng: [9.75, -83.75], name: 'San Jose 2017'},
        {latLng: [53.54, -113.49], name: 'Edmonton 2018'},
        {latLng: [51.04, -114.07], name: 'Calgary 2018'},
        {latLng: [51.18, -115.57], name: 'Banff 2018'},
        {latLng: [52.23, 21.01], name: 'Varsovia 2018'},
        {latLng: [51.10, 17.04], name: 'Breslavia 2018'},
        {latLng: [50.08, 14.44], name: 'Praga 2018'},
        {latLng: [48.21, 16.37], name: 'Viena 2018'},
        {latLng: [39.74, -104.99], name: 'Denver 2018'},
        {latLng: [21.02, -101.26], name: 'Guanajuato 2018'},
        {latLng: [21.88, -102.29], name: 'Aguascalientes 2018'},
        {latLng: [51.46, -112.71], name: 'Drumheller 2019'},
        {latLng: [43.47, -79.69], name: 'Oakville 2019'},
        {latLng: [35.68, 139.65], name: 'Tokio 2019'},
        {latLng: [35.96, 138.22], name: 'Hara 2019'},
        {latLng: [44.63, -81.26], name: 'Playa Sauble 2020'},
        {latLng: [45.25, -81.66], name: 'Tobermory 2020'},
        {latLng: [49.28, -123.12], name: 'Vancouver 2020'}
      ]
    });
  } else {
    $('#world-map-markers').vectorMap({
      map: 'world_mill',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      markerStyle: {
        initial: {
          fill: '#f83b3b',
          stroke: '#383f47'
        }
      },
      backgroundColor: '#383f47',
      markers: [
        {latLng: [45.50, -73.56], name: 'Montreal 2016'},
        {latLng: [43.65, -79.38], name: 'Toronto 2017'},
        {latLng: [9.75, -83.75], name: 'San José 2017'},
        {latLng: [53.54, -113.49], name: 'Edmonton 2018'},
        {latLng: [51.04, -114.07], name: 'Calgary 2018'},
        {latLng: [51.18, -115.57], name: 'Banff 2018'},
        {latLng: [52.23, 21.01], name: 'Warsaw 2018'},
        {latLng: [51.10, 17.04], name: 'Wroclaw 2018'},
        {latLng: [50.08, 14.44], name: 'Prague 2018'},
        {latLng: [48.21, 16.37], name: 'Vienna 2018'},
        {latLng: [39.74, -104.99], name: 'Denver 2018'},
        {latLng: [21.02, -101.26], name: 'Guanajuato 2018'},
        {latLng: [21.88, -102.29], name: 'Aguascalientes 2018'},
        {latLng: [51.46, -112.71], name: 'Drumheller 2019'},
        {latLng: [43.47, -79.69], name: 'Oakville 2019'},
        {latLng: [35.68, 139.65], name: 'Tokyo 2019'},
        {latLng: [35.96, 138.22], name: 'Hara 2019'},
        {latLng: [44.63, -81.26], name: 'Sauble Beach 2020'},
        {latLng: [45.25, -81.66], name: 'Tobermory 2020'},
        {latLng: [49.28, -123.12], name: 'Vancouver 2020'}
      ]
    });
  }

  $('.world').hide();
}