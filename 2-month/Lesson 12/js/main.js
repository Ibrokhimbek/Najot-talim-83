const myCarouselElement = document.querySelector('#carouselExampleInterval')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 500,
  wrap: false
})