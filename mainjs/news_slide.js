// JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    //var movesize=150; //이미지 하나의 너비
    var movesize=$('.news .slide_gallery ul li').outerWidth(true);
    //console.log(movesize);
    var timeonoff2;
   
    $('.news ul').after($('.news ul').clone());
 
    function moveG() {
        position-=movesize;  // 150씩 감소
        $('.news .slide_gallery').animate({left:position}, 'fast',
            function(){							
            if(position<=-2050){
                $('.news .slide_gallery').css('left',0);
                position=0;
            }
        }).clearQueue();
    }
    timeonoff2= setInterval(moveG, 3000);
    
        //슬라이드 겔러리를 한번 복제
 
  $('.button').click(function(e){
     e.preventDefault();

    clearInterval(timeonoff2);
     
     if($(this).is('.prev')){  //이전버튼 클릭
         
          position-=movesize;  // 150씩 감소
         $('.news .slide_gallery').animate({left:position}, 'fast',function(){
            if(position<=-2050){
                position=0;
                $('.news .slide_gallery').css('left',0);
             }
         }).clearQueue();  

     }else if($(this).is('.next')){  //다음버튼 클릭
           if(position>=0){
                $('.news .slide_gallery').css('left',-2050);
                position=-2050;
            }
 
            position+=movesize; // 150씩 증가
            $('.news .slide_gallery').animate({left:position}, 'fast',
                function(){							
                    if(position>=0){
                        $('.news .slide_gallery').css('left',-2050);
                        position=-2050;
                    }
                }).clearQueue();
  
      }
   });
});

