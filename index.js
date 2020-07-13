$(document).ready(function(){  
  var scrolled = 1;
  var introduction = 0;
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0){
      $(".header").addClass('scrolled');
        if(scrolled == 1){
        $('html, body').animate({
        scrollTop: $(".imgBackground").offset().top+5
        }, 500);
        scrolled = 0;
        if(introduction == 0){
          $(".introduction").css({"opacity": "1"});
          $('.introduction').each(function (index) {
            var characters = $(this).text().split("");
            $this = $(this);
            $this.empty();
          $.each(characters, function (i, elements) {
              $this.append("<span class='ha' style='opacity:0'>" + elements + "</span");
              $('span:nth-of-type(' + i + ')').css("animation-delay", i - i/1.2 + "s");
          }); 
          });
          introduction = 1;
        }
        $(".section1").addClass("scrolledSection1");
        $(".section2").addClass("scrolledSection2");
        $(".section3").addClass("scrolledSection3");
      }
   }
    else{
      $(".header").removeClass('scrolled');
       scrolled = 1;
       $(".section1").removeClass("scrolledSection1");
       $(".section2").removeClass("scrolledSection2");
       $(".section3").removeClass("scrolledSection3");
    }
});

  $( ".scrollSet" ).click( function() {
    $('html, body').animate({
          scrollTop: $(".imgBackground").offset().top+5
      }, 500);
  });

});

  function randomInt(min, max) {
    return Math.floor((Math.random() * max) + min);
  }

  function randomNum(min, max) {
    return Math.max((Math.random() * max), min).toFixed(1);
  }

