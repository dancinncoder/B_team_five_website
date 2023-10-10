/* <-----------------------------member detail toggle(지훈,하민)----------------------------> */


function memberToggle1(){
  $('#informationBox_하민').toggle(1000);
  if (document.getElementById("informationBox_하민").style.display = "block") {
    document.getElementById("informationBox_창근").style.display = "none";
    document.getElementById("informationBox_준호").style.display = "none";
    document.getElementById("informationBox_지훈").style.display = "none";
  }
}
function memberToggle2(){
  $('#informationBox_창근').toggle(1000);
  if (document.getElementById("informationBox_창근").style.display = "block") {
    document.getElementById("informationBox_하민").style.display = "none";
    document.getElementById("informationBox_준호").style.display = "none";
    document.getElementById("informationBox_지훈").style.display = "none";
  }
}
function memberToggle3(){
  $('#informationBox_준호').toggle(1000);
  if (document.getElementById("informationBox_준호").style.display = "block") {
    document.getElementById("informationBox_창근").style.display = "none";
    document.getElementById("informationBox_하민").style.display = "none";
    document.getElementById("informationBox_지훈").style.display = "none";
  }
}
function memberToggle4(){
  $('#informationBox_태용').toggle(1000);
}
function memberToggle5(){
  $('#informationBox_지훈').toggle(1000);
  if (document.getElementById("informationBox_지훈").style.display = "block") {
    document.getElementById("informationBox_창근").style.display = "none";
    document.getElementById("informationBox_준호").style.display = "none";
    document.getElementById("informationBox_하민").style.display = "none";
  }
}




/* <-----------------------------team introduction(창근)----------------------------> */
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
  },
  mouseleave: function saMouseLeave() {
    saEnter.classList.add(HIDDEN_CLASSNAME);
  }
};

function openSA() {
  console.log("click");
}

// saEnter.classList.add(HIDDEN_CLASSNAME);
teamPicture.addEventListener("mouseenter", saEventHandler.Mouseenter);
teamPicture.addEventListener("mouseleave", saEventHandler.mouseleave);
saEnter.addEventListener("click", openSA);





