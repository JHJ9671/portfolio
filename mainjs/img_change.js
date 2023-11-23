

$(document).ready(function(){

    var characters = [
        {imgsrc:'esg01.jpg',
          linksrc:'sub3_2.html',
          esgsection:'environment'},
        {imgsrc:'esg02.jpg',
          esgsection:'social'},
        {imgsrc:'esg03.jpg',
          esgsection:'governance'}
      ];
    $('.management ul li').removeClass('current');
    $('.management ul li:eq(0)').addClass('current');

    $('.management ul li').mouseenter(function(){
      $('.management ul li').removeClass('current');
        var ind = $(this).index('.management ul li');

        $('.management .management_img').attr('src','./images/'+characters[ind].imgsrc);
        $('.management .esg_more').attr('href','./sub3/'+characters[0].linksrc+'#'+characters[ind].esgsection);

    });
    $('.management ul li').mouseleave(function(){
      $('.management ul li').removeClass('current');
      $(this).addClass('current');
    });
  });
  
  