$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();
       var documentHeight =  $(document).height();
       $("#gnb").css('height',documentHeight); 

      if(op==false){
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false];
    var arrcount=onoff.length;
    
    // console.log(arrcount);
    
    $('#gnb .depth1 h4 a').click(function(){
        var ind=$(this).parents('.depth1').index();
        
        // console.log(ind);
        
       if(onoff[ind]==false){
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('fast');
        $('h4').removeClass('on');
        $(this).parents('.depth1').find('h4').addClass('on');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
         for(var i=0; i<arrcount; i++) onoff[i]=false; 
         onoff[ind]=true;
         $('.depth1 span').html('<i class="fa-solid fa-chevron-down"></i>');
         $(this).find('span').html('<i class="fa-solid fa-chevron-up"></i>');   
       }else{
         $(this).parents('.depth1').find('ul').slideUp('fast'); 
         $('h4').removeClass('on');
         onoff[ind]=false;   
         $('.depth1 span').html('<i class="fa-solid fa-chevron-down"></i>');        
       }
       
    });    
    var visual_height = $('.visual').height()-61; // 500

    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면

      var scroll = $(window).scrollTop(); //스크롤의 거리

      if(scroll>visual_height){ //500이상의 거리가 발생되면

          $('#headerArea').css('background','#fff');  //top보여라~~~~

          $('#headerArea').addClass('down');

      }else{

          $('#headerArea').css('background','rgba(0, 0, 0, .07)');//top안보여라~~~~

          $('#headerArea').removeClass('down');

      }

    });
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

   $('.topMove').click(function(e){

        e.preventDefault();

       //상단으로 스르륵 이동합니다.

      $("html,body").stop().animate({"scrollTop":0},500);

   });


