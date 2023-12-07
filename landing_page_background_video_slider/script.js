 // menu toggle
 let menuBtn = document.querySelector(".menu-btn");
 let navbar = document.querySelector(".navbar");

 menuBtn.addEventListener("click", () => {
     menuBtn.classList.toggle("active");
     navbar.classList.toggle("active");
 });

 // video slider
 const btns = document.querySelectorAll(".nav-btn");
 const slide = document.querySelectorAll(".video-slide");
 const contents = document.querySelectorAll(".content");

 var sliderNav = function(manual){
     btns.forEach((btn) => {
         btn.classList.remove("active");
     });

     slide.forEach((slides) => {
         slides.classList.remove("active");
     });

     contents.forEach((content) => {
        content.classList.remove("active");
     });

     btns[manual].classList.add("active");
     slide[manual].classList.add("active");
     contents[manual].classList.add("active");
 }
 
 btns.forEach((btn, i) => {
     btn.addEventListener("click", () => {
         sliderNav(i);
     });
 });