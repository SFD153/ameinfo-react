const MyCarousel2 = {
  autoplay: true,
  dots: false,
  loop: true,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    700: {
      items: 3,
    },
    992: {
      items: 6,
    },
    1200: {
      items: 6,
    },
  },
};

export default MyCarousel2;
