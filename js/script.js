const thisURL = window.location.pathname;
console.log(thisURL)

if (thisURL == "/App/artwork.html") {
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

