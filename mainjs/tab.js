// JavaScript Document

$(document).ready(function(){
    var cnt=$('.business_inner dl');  //탭메뉴 개수 ***
    $('.business_inner dl:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.business_inner ul:eq(0)').css('background','green').css('color','#333'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.business_inner dl').each(function (index) {  // index=0 1 2
      $(this).mouseenter(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

          $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
          $(".tabs .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $('.tab').css('background','red').css('color','#fff'); //모든 탭메뉴를 비활성화
          $(this).css('background','green').css('color','#333'); // 클릭한 해당 탭메뉴만 활성화
     });
    });

  });

