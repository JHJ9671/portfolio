$(document).ready(function () {
    
    $('.tab li:eq(0)').find('a').addClass('tabCurrent');

    var tabmove = $('.history_visual:eq(0)').offset().top + $('.history_tab').height();
    
    var history1 = $('.year:eq(0)').offset().top -300;
    var history2 = $('.year:eq(1)').offset().top -300;
    var history3 = $('.year:eq(2)').offset().top -300;
    var history4 = $('.year:eq(3)').offset().top -300;

    // 스크롤 이벤트
    $(window).on('scroll',function(){
        
        var scroll = $(window).scrollTop();
        // tab on
        if(scroll > tabmove){
            $('.history_tab').addClass('on');
            $('#headerArea').hide();
            $('.history_wrap').css('marginTop',90); // 탭 높이만큼 마진
        } else {
            $('.history_tab').removeClass('on');
            $('#headerArea').fadeIn('fast');
            $('.history_wrap').css('marginTop','');
        }


        // tab spy
        $('.tab li a').removeClass('tabCurrent');

        if(scroll >= 0 && scroll <= history2){
            $('.tab li:eq(0)').find('a').addClass('tabCurrent');

        } else if(scroll>history2 && scroll<=history3){
            $('.tab li:eq(1)').find('a').addClass('tabCurrent');

        } else if(scroll>history3 && scroll<=history4){
            $('.tab li:eq(2)').find('a').addClass('tabCurrent');
        } else if(scroll>history4){
            $('.tab li:eq(3)').find('a').addClass('tabCurrent');
        }

        
        // 연혁 붙이기
        // $('.year').removeClass('tabCurrent');
        // if(scroll > tabmove+390 && scroll < history2-10){
        //     $('.year:eq(0)').addClass('tabCurrent');
        // } else if(scroll>=history2-10 && scroll<history3-10){
        //     $('.year:eq(1)').addClass('tabCurrent');
        // } else if(scroll>=history3-10 && scroll<history4-10){
        //     $('.year:eq(2)').addClass('tabCurrent');
        // } else if(scroll>history4){
        //     $('.year:eq(3)').addClass('tabCurrent');
        // } else {
        //     //$('.year').removeClass('tabCurrent');
        // }

    });



    // tab click, scroll move
    $('.tab li a').click(function(e){
        e.preventDefault();

        var ind = $(this).index('.tab li a');
        var value = $('.history_wrap .year:eq(' + ind + ')').offset().top - 100;
        
        // value의 위치로 움직여라
        $("html,body").stop().animate({"scrollTop":value},500);
    });

    

    // $('.tab li a').click(function(e){
    //     e.preventDefault();

    //     var value = 0;

    //     if($(this).hasClass('link1')){
    //         value= $('#y2000').offset().top;

    //     }else if($(this).hasClass('link2')){
    //         value= $('#y1990').offset().top;

    //     }else if($(this).hasClass('link3')){
    //         value= $('#y1980').offset().top;

    //     }else if($(this).hasClass('link4')){
    //         value= $('#y1970').offset().top;
    //     }

    //     value -= 100;
        
    //     // value의 위치로 움직여라
    //     $("html,body").stop().animate({"scrollTop":value},500);
    // });


    
});