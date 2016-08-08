/**
 * Created by Ujjaval on 8/7/2016.
 */

var slideIndex = 1;

//showing
showSlides(slideIndex);

// change slide accroding to click on prev or next button
function changeSlides(n) {
    showSlides(slideIndex += n);
}

//change side accroindg to click on thumbnails
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {

    var i;
    var slides = document.getElementsByClassName("myslides");
    console.log(slides);
    var thumbnails = document.getElementsByClassName("thumbnails");
    console.log(thumbnails);

    if(n > slides.length) {
        slideIndex = 1;
    }

    if( n < 1 ) {
        slideIndex = slides.length;
    }

    for( i = 0 ; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for (i = 0 ; i < thumbnails.length; i++){
        thumbnails[i].className = thumbnails[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
     thumbnails[slideIndex - 1].className += " active";
   
}

//get modal
var modal = document.getElementById("myModal");

//get the image and insert it inside the modal - use its 'alt' text ass a caption
var img = document.getElementsByClassName("MyImage");

var modalImg = document.getElementById("imgModal");

var captionText = document.getElementById("caption");

for(var i=0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;
    }
}

//get the span element that close the modal
var span = document.getElementsByClassName("close")[0];

//when the user clicks on span (x) , close the modal
span.onclick = function () {
    modal.style.display = "none";
}

function fullScreen() {
    var modalImg = document.getElementById("imgModal");
    window.open(modalImg.src, "" , "yes");
}


