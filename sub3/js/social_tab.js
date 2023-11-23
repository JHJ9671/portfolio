

$(document).ready(function(){


  var social_Characters = [
      {
          head:'KT is 인권경영 정책', 
          information:'kt is는 사업 운영뿐만 아니라 사업 관계에 따른 인권침해가 일어나지 않도록 노력하고 있습니다. 또한 세계인권선언을 존중하고 UNGP(기업과 인권 이행원칙)을 준수합니다. kt is 인권경영 정책은 모든 이해관계자가 확인할 수 있도록 공개하고 있으며, 임직원 및 협력사를 포함하여 kt is의 모든 이해관계자가 대상입니다.', 
          download:'content2/kt_is_humanMgt.pdf'
      },
      {
          head:'KT is 정보보호 정책', 
          information:'kt is는 정보보호 및 개인정보보호와 관련된 각종 법규를 준수하고 있으며 기술적, 관리적 보호대책을 수립하여 이행하고 있습니다. 아울러 고객의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위해 최선을 다하고 있습니다.', 
          download:'content2/kt_is_informationMgt.pdf'
      },
      {
          head:'KT is 지역사회 참여정책', 
          information:'kt is는 지속적인 지역사회참여를 통해 지역사회 주민이 보다 편하고 질 높은 삶을 살 수 있도록 끊임없이 노력하고 있습니다. 또한, kt is는 사회 구성원으로서 이러한 지역사회 참여 노력을 통해 결과적으로 더불어 사는 공동체 사회를 만들고자 하는 목표를 가지고 있습니다.' 
      }
    ];
    
    var cnt = 0; 

    $('.social_tit').html(social_Characters[cnt].head); //dt 타이틀 교체
    $('.social_info').html(social_Characters[cnt].information); //dd 설명 교체
    $('.download').attr('href',''+'./images/'+social_Characters[cnt].download);
    $('.download').html('<i class="fa-solid fa-file-arrow-down"></i>'+social_Characters[cnt].head);

    $('.slide_tab a').click(function(e){
      e.preventDefault();
     
      if($(this).is('.social_prev')){  //이전버튼 클릭 
         if(cnt==0){cnt=3}
         cnt--; // 2 1 0 2 1 0 2 1 0 ~~~
          $('.social_tit').html(social_Characters[cnt].head); //dt 타이틀 교체
          $('.social_info').html(social_Characters[cnt].information); //dd 설명 교체
          if(social_Characters[cnt].download){
            $('.download').show();
            $('.download').attr('href',''+'./images/'+social_Characters[cnt].download);
            $('.download').html('<i class="fa-solid fa-file-arrow-down"></i>'+social_Characters[cnt].head);
          }else{
            $('.download').hide();
          }
         
      }else if($(this).is('.social_next')){  //다음버튼 클릭  
        if(cnt==social_Characters.length-1){cnt=-1};
        cnt++; //0 1 2 0 1 2~~~
        $('.social_tit').html(social_Characters[cnt].head); //dt 타이틀 교체
        $('.social_info').html(social_Characters[cnt].information);
        if(social_Characters[cnt].download){
            $('.download').show();
            $('.download').attr('href',''+'./images/'+social_Characters[cnt].download);
            $('.download').html('<i class="fa-solid fa-file-arrow-down"></i>'+social_Characters[cnt].head);
        }else{
            $('.download').hide();
          }
       
       }
    });
});

