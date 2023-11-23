

$(document).ready(function(){


    var business_Characters = [
        {
            head:'고객서비스', 
            information:'<span>kt is</span>는 모든 통신사 유/무선 전화번호를 통합 안내하고 있는 114번호안내는 365일 24시간 운영하고 있는 국내 유일 전화번호 안내 서비스입니다. 고객님이 원하는 상호명, 이름, 유선전화, 핸드폰번호, 주소 등의 정보를 음성과 온라인으로 모두 안내합니다.', 
            imgsrc:'business01.jpg',
            linksrc:'sub2_1.html'
        },
        {
            head:'Biz솔루션', 
            information:'<span>kt is</span>는 고객만족서비스 기반의 국내 최고 콜센터 아웃소싱 전문업체로 80년의 KT114 번호안내를 비롯한 다양한 운영 경험을 통해 콜센터 운영, 컨설팅, 시설임대, 구축 및 AP 개발지원, 인재파견, 교육 등의 고객 맞춤형 컨택사업/ 토탈아웃소싱 사업을 수행하고 있습니다. ', 
            imgsrc:'business02.jpg',
            linksrc:'sub2_2.html'
        },
        {
            head:'디지털사업', 
            information:'<span>kt is</span>는 KT로부터 타운보드TV사업을 2022년 3월 17일 인수하여 공격적 투자와 함께 KT그룹 역량 기반의 사업경쟁력 강화를 통해 대한민국 대표 공간매체사업자로 성장하고자 합니다. 국내외 유명 제조사의 다양한 상품을 발굴하여 경쟁력 있는 가격으로 고객(수요처)에 맞춤 공급하고 있습니다.', 
            imgsrc:'business03.jpg',
            linksrc:'sub2_3.html'
        }
      ];
  
    $('.business_inner ul li:eq(0) a').addClass('current');
    $('.business_inner dl dd .business_more').attr('href','./sub2/'+business_Characters[0].linksrc);

    $('.business_inner ul li a').click(function(e){
        e.preventDefault();
      
        var ind = $(this).index('.business_inner ul li a');
  
        // $('.characters .charbox img').attr('src','./images/char0'+(ind+1)+'_x2.png'); //확대 이미지 교체
        $('.business_inner img').attr('src','./images/'+business_Characters[ind].imgsrc).hide().fadeIn('slow');
        $('.business_inner dl dd .business_more').attr('href','./sub2/'+business_Characters[ind].linksrc).hide().fadeIn('slow');
        $('.business_tit').html(business_Characters[ind].head); //dt 타이틀 교체
        $('.business_info').html(business_Characters[ind].information); //dd 설명 교체

        $('.business_inner ul li a').removeClass('current'); //버튼이미지 비활성화
        $('.business_inner ul li:eq('+ind+') a').addClass('current');  // 클릭한 자신만 활성화
    });
  });
  
  