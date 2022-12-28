
$(function(){

  menu();
  coverimage();
  maintab();
  outlink();
  allCheck();



  
  
  $("section.sub-content #sub-menu li.on a").on("click", function(e){

      $("nav#sub-menu").toggleClass("active");
      e.preventDefault();

  });

  $(window).on("resize", function(){
      $("nav#main-menu h3 a").unbind();
      menu();
  });


  $("div.find-form").last().hide();

  var radioContent = $("div.find-form");


  $("div.find-type input[type='radio']").click(function() {

      radioContent.hide();
      radioContent.eq($("input[type='radio']").index(this)).show();


  });


  $(".sign-modal").on("click",function(){
    $(".modal").addClass("on")
  })

  $(".modal-content .close").on("click",function(){
    $(".modal").removeClass("on")
  })

  


  /* ----- slider ----- */

  new Swiper('.trend-swiper', {
    direction: 'vertical', // 수직 슬라이드
    autoplay:{
      delay : 5000,
      disableOnInteraction: false
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    navigation: {
      nextEl: '.trend-next',
      prevEl: '.trend-prev',
    },
    breakpoints: {
      1199: {
        direction: 'horizontal', // 수직 슬라이드
        slidesPerView: 2,
        spaceBetween: 4,
      },
    },
  })

  new Swiper('.gallery-swiper', {
    autoplay:{
      delay : 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
    },
    breakpoints: {
      1199: {
        direction: 'horizontal', // 수직 슬라이드
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  new Swiper('.notice-swiper', {
    direction: 'vertical', // 수직 슬라이드
    // autoplay:{
    //   delay : 5000,
    //   disableOnInteraction: false
    // },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,

    navigation: {
      nextEl: '.notice-next',
      prevEl: '.notice-prev',
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  new Swiper('.photo-swiper', {
    autoplay: false ,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,

    navigation: {
      nextEl: '.photo-next',
      prevEl: '.photo-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  new Swiper('.brochure-swiper', {
    autoplay: false ,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,

    navigation: {
      nextEl: '.brochure-next',
      prevEl: '.brochure-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      1199: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  });


});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();


$(window).on("resize", function(){
  windowh = $(window).height();
  windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {

  $(document).on("mousemove", function(e){
      if (windowW > 1200 && e.pageY > 410) {
          $("nav#main-menu").removeClass("on");
          $("#header").removeClass("on");
      }
  });

  $("button.main-menu").on("click", function () {
      $("nav#main-menu").addClass("on");

  });

  $("nav#main-menu button.close").on("click", function () {
      $("nav#main-menu").removeClass("on");
  });

  $("nav#main-menu h3 a").on("click", function (e) {
      
      $("nav#main-menu h3").removeClass("on");



      if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

          $(this).parent().addClass("on");
          e.preventDefault();

      }
      else {
          $("nav#main-menu h3 a").unbind();

      }
  });

  $("nav#main-menu div.menus").on("mouseenter", function(){
      $(this).parent().addClass("on");
      $("#header").addClass("on");
  });

  $(".schedule strong button").on("click", function(){
      $(this).parent().parent().toggleClass("off");
  });

  $(".boardList3 div.file button").on("click", function(){
      $(".boardList3 div.file button").removeClass("on");
      $(this).addClass("on");
      $(".boardList3 div.file ul.files").removeClass("on");
      $(this).parent().find("ul.files").addClass("on");
  });



}

/* ----- cover image ----- */ 
function coverimage() {


  $(".gallery-img").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });

  $(".photo-img").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });

  $(".brochure-img").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });

  $(".photo p.img-bg").each(function(){
      $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
  });

}

/* ----- main tab ----- */ 
function maintab() {

  $(".main-content .news h3").on("click", function(){
      $(".main-content .news h3").removeClass("active");
      $(this).addClass("active");

      $(".main-content .news .tab-data").removeClass("active");
      
      $(".main-content .news ."+ $(this).attr("data") +"").addClass("active");

  });
}

/* ----- outlink ----- */ 
function outlink() {
  $(".agency-open").click(function() {
      console.log("클릭");
      $(this).toggleClass("on");
  });
}


/* ----- all check----- */ 

function allCheck() {

    $(".allCheck").click(function() {
      if($(".allCheck").is(":checked")) $(".check").prop("checked", true);
      else $(".check").prop("checked", false);
    });
    
    $(".check").click(function() {
      var total = $(".check").length;
      var checked = $(".check:checked").length;
      
      if(total != checked) $(".allCheck").prop("checked", false);
      else $(".allCheck").prop("checked", true); 
    });
  
}









