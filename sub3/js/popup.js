

$(document).ready(function(){

  var memo = ['국제 환경경영시스템 ISO14001 인증 취득','온실가스 배출량 및 에너지 사용량 검증 성명서'];  
 
  $('.pop_menu a').click(function(e){
      e.preventDefault();

      var ind = $(this).index('.pop_menu a');  // 0 1 2 3

      $('.modal_box').fadeIn('fast');
      $('.popup').fadeIn('slow');

      $('.popup img').attr('src','./images/content2/environance'+(ind+1)+'.jpg');
      $('.popup p').text(memo[ind]);

  });

  $('.close_btn,.modal_box').click(function(e){
      e.preventDefault();
      $('.modal_box').hide();
      $('.popup').hide();
  });
});
