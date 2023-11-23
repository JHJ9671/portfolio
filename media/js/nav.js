$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();
       var documentHeight =  $(document).height();
       $("#gnb").css('height',documentHeight); 

      if(op==false){
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('ham_open');
        op=true;
      }else{
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('ham_open');
        op=false;
      }

   });

    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
      
      var scroll = $(window).scrollTop(); //스크롤의 거리
      var con1heigt = $('.contentArea section:eq(0)').height();
      if(scroll>=(con1heigt+100)){
        $('.contentArea .players::before').css('left',0).css('opacity',1);
      }else{

      }

    });
  });

 //네비 높이처리
 var documentHeight =  $(document).height();
 var screenSize = $(window).width(); 
 if( screenSize > 768){ 
    $("#gnb").height('auto');
 }else{
    $("#gnb").height(documentHeight);
 }

  var current=0; // 1(소형테블릿이상) , 0(모바일)
  $(window).resize(function(){    
     var screenSize = $(window).width(); 
     if( screenSize > 768){ //소형테블릿 이상
       $("#gnb").css({right:0,opacity:1});
       $("#gnb").height('auto');
       current=1;
     }
     if(current==1 && screenSize <= 768){
        $("#gnb").css({right:'-100%',opacity:0});
        $("#gnb").height(documentHeight);
        current=0;
     }
   }); 


  // $('.topMove').hide();

  $(window).on('scroll',function(){

       var scrollup = $(window).scrollTop();

       if(scrollup>300){

           $('.topMove').fadeIn('slow');

       }else{

           $('.topMove').fadeOut('fast');

       }

  });

  // 상단바로이동

   $('.top_move').click(function(e){

        e.preventDefault();

       //상단으로 스르륵 이동합니다.

      $("html,body").stop().animate({"scrollTop":0},1000);

   });

   


