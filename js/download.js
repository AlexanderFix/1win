//Burger

let burgerList = document.querySelectorAll('.burger_list')


function menuBurger() {
  burger_wrapper.classList.toggle('active_burger')
  burger_nav.classList.toggle('active_nav')
  document.body.classList.toggle('lock')
  burger_menu.classList.toggle('burger_active')
 burger_hr.classList.toggle('burger_active')
}

// burgerList.forEach(item => {
//   item.addEventListener('click', () => {
//     burger_wrapper.classList.remove('active_burger')
//     burger_nav.classList.remove('active_burger')
//     document.body.classList.remove('lock')
//     burger_menu.classList.remove('burger_active')
   
//   })
// });

burger_button.addEventListener('click', menuBurger)

// Burger end