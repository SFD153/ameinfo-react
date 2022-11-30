const StreamCarousel = {
  autoplay: false,
  dots: false,
  loop: false,
  nav: false,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  // responsiveBaseElement: '',
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    400: {
      items: 2,
      nav: false,
    },
    700: {
      items: 3,
      nav: false,
    },
    992: {
      items: 2,
      nav: false,
    },
    1200: {
      items: 3,
      nav: false,
    },
  },
};

export default StreamCarousel;
