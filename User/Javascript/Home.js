let menuBar = document.querySelector('#menu-bar');

let navbar = document.querySelector('.header .flex .navbar');

menuBar.onclick = () =>{

    menuBar.classList.toggle('fa-times');

    navbar.classList.toggle('active');
}


// slider work

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });


  
var swiper = new Swiper(".teacher-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
      clickable:true,
  },
  breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});


var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
      clickable:true,
  },
  breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});


// axios.get('http://localhost:5000/profile').then((result) => {
//     document.getElementById('data').innerHTML = `
    
//         <img src="../Uploads/${result.data.user.image}"  width="30px" height="30px" style="
//         border-radius:50%;" />
    
//     `
// })