// JavaScript Document

$(document).ready(function(){
    var cnt=$('.map .maps').size();  //탭메뉴 개수 ***
    // console.log(cnt);
    $('.map .maps:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tabs .tab1').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

          $('.content_area .map').css('height','auto'); //높이유동

          $('.map .maps').hide(); //모든 탭내용을 안보이게...
          //$(".tabs .maps:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('.map .maps:eq('+index+')').fadeIn('slow');
          $('.tab').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });
    });

  });

