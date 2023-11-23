// JavaScript Document

$(document).ready(function(){
    var cnt=$('#content section').size();  //탭메뉴 개수 ***
    // console.log(cnt);
    var hei = $('#content section:eq(0)').height()+100; // 첫번째 탭 내용만 열어라
    $('.service').height(hei);
    $('.service').css('overflow','hidden');
 
    $('.tabs .tab1').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다 
          $('.service').height('auto');
          $('#content section').css('height','auto'); //높이유동

          $('#content section').hide(); //모든 탭내용을 안보이게...
          //$(".tabs .maps:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('#content section:eq('+index+')').fadeIn('slow');
          $('.tab').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });
    });

  });

