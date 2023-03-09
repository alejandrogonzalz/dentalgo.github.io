console.log('Hello everybody'); 

// === SWIPER ===
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    centerSlide: 'true',
    autoplay:{
      delay:5000,
      disableOnInteraction: false,  
    },
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// === VIDEO ===
  var player = videojs("dg-video",{
      fluid:true
    
  });

// === SIDEBAR CLOSE ===

  const toggle = document.getElementById('toggle');
  const sidebar = document.getElementById('sidebar');

  document.onclick = function(e){
    if(e.target.id !=='sidebar' && e.target.id !== 'toggle')
    {
      toggle.classList.remove('active');
      sidebar.classList.remove('active')
    }
  }

  toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active')
  }


  // const body = document.querySelector('body'),
  // sidebar = body.querySelector('nav'),
  // toggle = body.querySelector(".toggle");

  // toggle.addEventListener("click" , () =>{
  // sidebar.classList.toggle("close");})

  

  // === SCROLL ANIMATIONS ===


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } 
      // else {
      //   entry.target.classList.remove('show');
      // }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

 
