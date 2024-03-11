if (document.querySelector(".bi-hand-thumbs-up")) {
 let like = document.querySelector(".bi-hand-thumbs-up");
let unlike = document.querySelector(".bi-hand-thumbs-up-fill");
like.addEventListener("click", function (){
    this.style.display = "none"
    unlike.style.display = "inline"
})


unlike.addEventListener("click", function (){
    this.style.display = "none"
    like.style.display = "inline"
})   
}

if (document.querySelector(".swiper-screenshots")) {
    const mySwiperOne = new Swiper (".swiper-screenshots", {
        loop: true,
        parallax:true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

        breakpoints: {

            1200: {
              slidesPerView: 3,
              spaceBetween: 20
            }}
    });
} else if(document.querySelector(".swiper-filters")) {
    const mySwiperTwo = new Swiper (".swiper-filters", {
        slidesPerView: "auto",
        spaceBetween: 10,
        focusableElements: false,
        
    });
    const mySwiperThree = new Swiper (".swiper-featured-artwork", {
        slidesPerView: "2.3",
        spaceBetween: 10,
        lazyloading: true,
        effect:'coverflow',
        initialSlide: 1,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 15,
            slideShadows: false,
            depth: 50,
          },
    });

}