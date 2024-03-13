

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


const promo = document.querySelector('.promo_code')



function modalStyle() {
    copy_modal.style = 'display: block'
    copy_modal.style.animation = 'copy 3s linear';

}
function timerModal() {
                console.log('11');
                copy_modal.style = 'display: none'
            }
promo.addEventListener('click', async () => {
    await navigator.clipboard.writeText(copy.textContent)
        .then(() => {
            
            
            console.log(copy_modal.style.display);
            if (copy_modal.style.display == 'block') {
                console.log('ss');
            }
            else {
                console.log('aa');
                modalStyle()
                setTimeout(timerModal, 3000)

            }
        })


})

link_site.addEventListener('click', () => {
    location.href='http://google.com';
})