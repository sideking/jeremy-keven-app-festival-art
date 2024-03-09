const thisURL = window.location.pathname;
console.log(thisURL)

if (thisURL == "/app/artwork.html") {
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

if (thisURL == "/index.html") {
    const mySwiperOne = new Swiper (".swiper-screenshots ", {
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
} else if(thisURL == "/app/index.html") {
    const mySwiperOne = new Swiper (".swiper-filters ", {
        slidesPerView: 6,
        spaceBetween: 20,
        
    })
}