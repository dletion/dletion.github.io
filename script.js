// JavaScript Document
function hideFuckingEverything() {
  $("#monster-select").css({"border-style": "none"});
  $("#coke-select").css({"border-style": "none"});
  $("#unilever-select").css({"border-style": "none"});
  $("#starbucks-select").css({"border-style": "none"});
  $("#mars-select").css({"border-style": "none"});
  $("#quaker-select").css({"border-style": "none"});

  $("#monsterdesc").hide();
  $("#cokedesc").hide();
  $("#unileverdesc").hide();
  $("#starbucksdesc").hide();
  $("#marsdesc").hide();
  $("#quakerdesc").hide();

  $("#phonemock-monster").hide(); 
  $("#phonemock-coke").hide(); 
  $("#phonemock-unilever").hide();
  $("#phonemock-starbucks").hide();
  $("#phonemock-mars").hide(); 
  $("#phonemock-quaker").hide();
}

function showMyShit(name) {
  $("#" + name + "-select").css({"border-bottom": "2px solid #EC876A"});
  $("#phonemock-" + name).show();
  $("#phonemock-" + name).css({"opacity": 100,}); // TODO: find out why we have to do this.
  $("#" + name + "desc").show();
}

function setupEasyScroll() {
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
      window.location.hash = target;
    });
  });
}

jQuery(document).ready(function() {
//smooth scrolling
hideFuckingEverything();
showMyShit("monster");

////////SHOW HIDE OF CRISP PAGE/////////////
$("#monster-select").click(function(){
  hideFuckingEverything();
  showMyShit("monster"); 
});
$("#mars-select").click(function(){
  hideFuckingEverything();
  showMyShit("mars");
});
$("#coke-select").click(function(){
  hideFuckingEverything();
  showMyShit("coke");    
});
$("#starbucks-select").click(function(){
  hideFuckingEverything();
  showMyShit("starbucks");
});
$("#unilever-select").click(function(){
  hideFuckingEverything();
  showMyShit("unilever");
});
$("#quaker-select").click(function(){
  hideFuckingEverything();
  showMyShit("quaker");
});

setupEasyScroll();

//fade-in within the main page
window.sr = ScrollReveal();
sr.reveal('#skill', { origin:'bottom', distance:'50px', duration: 600, delay: 300 }, 100 );
//sr.reveal('h1', { distance: '0px' });//
//sr.reveal('p', { distance:'0px', duration:700, delay: 300})//
sr.reveal('#projectimg', { origin:'bottom', distance:'50px', duration: 600, delay: 300 }, 100 );
sr.reveal('img', { distance:'0px', duration: 700, delay: 300});

});