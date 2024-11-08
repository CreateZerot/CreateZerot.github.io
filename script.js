window.addEventListener('scroll',function(e) {
    const upper = document.getElementById('up');
    if (window.scrollY>300) {
        upper.style.display = 'inline-flex';
    } else {
        upper.style.display = 'none';
    }
});

let elements_to_watch = document.querySelectorAll('.watch');

let callback = function(items){
    items.forEach((item) => {
        if (item.isIntersecting){
            item.target.classList.add('in-page');
        } else{
            item.target.classList.remove('in-page');
        }
    });
}

let observer = new IntersectionObserver(callback, {threshold: 0.5});

elements_to_watch.forEach((element) =>{
    observer.observe(element);
});

//togliere i commenti per aggiungere i pulsanti di scorimento '<' ed '>'(non cosigliato)
let qtSlide = [];
let active = [];
let container = document.getElementsByClassName("slideshow-container");
let scroller = document.getElementsByClassName("dots-scroll");
for(j = 0; j < container.length; j++){/*
    qtSlide[j] = container[j].childElementCount;*/
    active[j]=1;
}
showSlides();/*
function plusSlides(g, n) {
    showSlides(active[g] += n);
}*/
function currentSlide(g,n) {
    showSlides(active[g]=n);
}
function showSlides(g,n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");/*
    for (i = 0; i < container.length; i++) {
        if (n > qtSlide[g]) { active[g] = 1 }
        if (n < 1) { active[g] = qtSlide[g] }
        
    }*/
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < container.length; i++) {
        container[i].children[active[i]-1].style.display = "block";
        scroller[i].children[active[i]-1].className += " active";
    }
}
/* Auto Slide(da upgredare x slide multipli)
let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/