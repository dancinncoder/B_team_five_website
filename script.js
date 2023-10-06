// member detail toggle
function memberToggle1(){
  $('#informationBox_하민').toggle(1000);
}

function memberToggle2(){
  $('#informationBox_창근').toggle(1000);
}

function memberToggle3(){
  $('#informationBox_준호').toggle(1000);
}

function memberToggle4(){
  $('#informationBox_태용').toggle(1000);
}

function memberToggle5(){
  $('#informationBox_지훈').toggle(1000);
}





























// 방명록 이름 댓글 추가 스크립트 입니다.
function makebox() {
  let nickname = $('#nickname').val();
  if (nickname.length < 1) {
    $('.warning1').css('display', 'block');
    $('.warning2').css('display', 'none');   // 코멘트 관련 경고 숨김
    return;
  } else {
    $('.warning1').css('display', 'none');  // 닉네임 관련 경고 숨김
  }


  let comment = $('#comment').val();
  if (comment.length < 3) {
    $('.warning2').css('display', 'block');
    $('.warning1').css('display', 'none'); // 닉네임 관련 경고 숨김
    return;
  } else {
    $('.warning2').css('display', 'none'); // 코멘트 관련 경고 숨김
  }



  let temp_html =
    `  
  <div>
    <div class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
        <img src="https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png" alt="twbs" width="36" height="36" class="rounded-circle flex-shrink-0">
        <div class="d-flex gap-2 w-100 justify-content-between nesfont">
            <div>
                <h4 class="mb-0">${nickname}</h4>
                <p class="mb-0 opacity-75"> ${comment}</p>
            </div>
            <small class="opacity-50 text-nowrap">now</small>
        </div>
        <button type="button" onclick="removebtn(this)" id="removebtn" class="btn-close " aria-label="Close"></button>
    </div>
</div>      
`;
  $('#newcommnet').append(temp_html);

}
// 등록된 방명록 삭제 스크립트 입니다.
function removebtn(button) {
  $(button).closest('.list-group-item').remove();
}



