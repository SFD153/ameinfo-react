const AuthorCarousel = {
  autoplay: false,
  dots: false,
  loop: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 2,
    },
    700: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

export default AuthorCarousel;
