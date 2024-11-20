function overHead(x)
{
    x.style.backgroundColor="#F12B01";
    x.style.color="beige"
    x.style.padding="10px"
    x.style.borderRadius="2px";
}
function outHead(x)
{
    x.style.backgroundColor="beige";
    x.style.color="#F12B01";
}
function overPlace(x)
{
    x.style.opacity="0.5";
}
function outPlace(x)
{
    x.style.opacity="1";
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}