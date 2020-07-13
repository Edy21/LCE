/* var right,left;
function click1(){
    $(".section1").addClass("clicked1");
    $(".section1").removeClass("sec1Hover");
    $(".section2").removeClass("sec2Hover");
    $(".section2").addClass("sec2Gone");
    $(".pOrganica").addClass("orgClicked");
    $(".arrows").addClass("clicked1_arr");
    document.getElementsByClassName('section1')[0].style.cursor="inherit";
    document.getElementsByClassName('section1')[0].style.backgroundImage="url('img/organicav2after.png')";
    document.getElementsByClassName('pAnorganica')[0].style.fontSize="0";
    $(".list").css("opacity","1");
    left=1;
}

function click2(){
    $(".section2").addClass("clicked2");
    $(".section1").removeClass("sec1Hover");
    $(".section2").removeClass("sec2Hover");
    $(".section1").addClass("sec1Gone");
    $(".pAnorganica").addClass("anorgClicked");
    $(".arrows").addClass("clicked2_arr");
    document.getElementsByClassName('section2')[0].style.cursor="inherit";
    document.getElementsByClassName('section2')[0].style.backgroundImage="url('img/anorganicaAfter.png')";
    document.getElementsByClassName('pOrganica')[0].style.fontSize="0";
    right=1;
}
function click3(){
  if(left==1){
  $(".section1").removeClass("clicked1");
  $(".section1").addClass("sec1Hover");
  $(".section2").addClass("sec2Hover");
  $(".section2").removeClass("sec2Gone");
  $(".pOrganica").removeClass("orgClicked");
  $(".arrows").removeClass("clicked1_arr");
  document.getElementsByClassName('section1')[0].style.cursor="pointer";
  document.getElementsByClassName('section1')[0].style.backgroundImage="url('img/organicav2.png')";
  document.getElementsByClassName('pAnorganica')[0].style.fontSize="70px";
  left=0;
  }
  if(right==1){
  $(".section2").removeClass("clicked2");
  $(".section1").addClass("sec1Hover");
  $(".section2").addClass("sec2Hover");
  $(".section1").removeClass("sec1Gone");
  $(".pAnorganica").removeClass("anorgClicked");
  $(".arrows").removeClass("clicked2_arr");
  document.getElementsByClassName('section2')[0].style.cursor="pointer";
  document.getElementsByClassName('section2')[0].style.backgroundImage="url('img/anorganica.png')";
  document.getElementsByClassName('pOrganica')[0].style.fontSize="70px";
 right=0;
 }
}

*/