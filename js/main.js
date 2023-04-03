$(document).ready(function () {
  /* fullpage */
  $("#fullpage").fullpage({
    menu: "#navMenu",
    autoScrolling: true,
    scrollOverflow: true,
    scrollOverflowReset: true,
    bigSectionsDestination: top,
    scrollingSpeed: 700,
    easingcss3: "ease",
    //responsiveWidth: 769,
    // afterResize: function (width, height) {},
    // afterResponsive: function (isResponsive) {},

    onLeave: function (index, nextIndex, direction) {
      if (index == 1) {
        $(".header_cont").addClass("on");
      }
      if (nextIndex == 1) {
        $(".header_cont").removeClass("on");
      }
    },
  });
  /* swiper */
  var swiper = new Swiper(".partner .swiper-container", {
    loop: true,
    speed: 50000,
    autoplay: {
      delay: 0,
    },
  });

  /* service swiper */
  if ($(window).width() <= 390) {
    $(".service_cont").addClass("swiper-container");
    $(".service_wrap").addClass("swiper-wrapper");
    $(".service_box").addClass("swiper-slide");

    var swiper2 = new Swiper(".service .swiper-container", {
      slidesPerView: 1,
      centeredSlides: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  }
});

/* home h1 text interaction */
const spanText = function spanText(text) {
  const string = text.innerText;
  let spaned = "";
  for (let i = 0; i < string.length; i++) {
    if (string.substring(i, i + 1) === " ")
      spaned += string.substring(i, i + 1);
    else spaned += "<span>" + string.substring(i, i + 1) + "</span>";
  }
  text.innerHTML = spaned;
};

const headline = document.querySelector("h1.sec01_tit");

spanText(headline);

let animations = document.querySelectorAll(".sec01_tit");

animations.forEach((animation) => {
  let letters = animation.querySelectorAll("span");
  letters.forEach((letter, i) => {
    letter.style.animationDelay = i * 0.1 + "s";
  });
});

/* home mo-menu */
const moMenu = document.querySelector(".mo_menu");
const moOverlay = document.querySelector(".m-overlay");
const li = document.querySelectorAll(".m-overlay li");

moMenu.addEventListener("click", () => {
  moOverlay.classList.toggle("on");
  moMenu.classList.toggle("open");
});

li.forEach((item) => {
  item.addEventListener("click", () => {
    moOverlay.classList.remove("on");
    moMenu.classList.remove("open");
  });
});
