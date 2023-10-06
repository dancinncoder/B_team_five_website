// 카드 토글기능
function opneclose1() {
  $('#inforbox1').toggle();
}
function opneclose2() {
  $('#inforbox2').toggle();
}
function opneclose3() {
  $('#inforbox3').toggle();
}
function opneclose4() {
  $('#inforbox4').toggle();
}
function opneclose5() {
  $('#inforbox5').toggle();
}



// team intro part
const saEnter = document.querySelector(".saEnter")
const teamPicture = document.querySelector(".team_picture")
const HIDDEN_CLASSNAME = "hidden";

function saMouseenter() {
  if (saEnter.classList = "hidden") {
    saEnter.classList.remove(HIDDEN_CLASSNAME);
    console.log("mouseenter");
  } else {
    saEnter.classList.add(HIDDEN_CLASSNAME);
    console.log("MouseLeaver");
  }
}

const saEventHandler = {
  'Mouseenter': () => {
    saEnter.classList.remove(HIDDEN_CLASSNAME);
    console.log("mouseenter");x
  },
  mouseleave: function saMouseLeave() {
    saEnter.classList.add(HIDDEN_CLASSNAME);
    console.log("MouseLeaver");
  }
};

function openSA() {
  console.log("click");
}

saEnter.classList.add(HIDDEN_CLASSNAME);
teamPicture.addEventListener("mouseenter", saEventHandler.Mouseenter);
teamPicture.addEventListener("mouseleave", saEventHandler.mouseleave);
saEnter.addEventListener("click", openSA);




