const trendingSwiper = new Swiper(".trending_swiper", {
    loop:Infinity,
    slidesPerView: "auto",
    spaceBetween: 50,
  });
  
  const testimonialSwiper = new Swiper(".testimonial_swiper", {
    loop:Infinity,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let sections=document.querySelectorAll('section');

  window.onscroll=()=>{
    sections.forEach(sec => {
      let top=window.scrollY;
      let offset=sec.offsetTop;
      let height=sec.offsetHeight;

      if(top>=offset && top < offset+height){
        sec.classList.add('show-animate');
      
      }
      else{
        sec.classList.remove('show-animate');
      }

    })
  }
