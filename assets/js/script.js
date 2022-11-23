
$(function(){
  $('.testimonial').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots:true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          dots:true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      }
    ]
  });
}
);
//Home-Project page
$(function(){
  $('.projects').slick({
    prevArrow:'.arr_back',
    nextArrow:'.arr_next',
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      }
    ]
  });
}
);
//Projects Mobile version
$(function(){
  $('.projects-mobile').slick({
    prevArrow:'.arr_back-proj',
    nextArrow:'.arr_next-proj',
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
  });
}
);

/*window.addEventListener("scroll", function(){
  const nav = document.querySelector("nav");
  nav.classList.toggle("stix", window.scrollY > 500);
  const scrolled = window.scrollY;
  console.log(scrolled);
})*/

/*$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass('nav', $(this).scrollTop() > $nav.height());
  });
});*/

const navbar = document.querySelector('nav');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('stix');
    } else {
        navbar.classList.remove('stix');
    }
};