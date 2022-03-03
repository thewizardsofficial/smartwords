const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 2
    }
}

$(document).ready(function () {
  $('html, body').scrollTop(0);

  $(window).on('load', function() {
    document.getElementById("navbar").style.top = "0";
  setTimeout(function(){
      $('html, body').scrollTop(0);
      
  }, 0);
});

$("#toggle").click(function(){
  $("#sidebar").toggleClass("active");
});
 $(document).click((e) => {
     if (e.target.parentNode.id == "sidebar" || e.target.parentNode.class == "topics") {
       $("sidebar").addClass("active");
     }
     else {
       $("sidebar").removeClass("active");
     }
   });

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();
    const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
};

});
