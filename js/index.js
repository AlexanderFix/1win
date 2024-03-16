

//Burger

let burgerList = document.querySelectorAll('.burger_list')


function menuBurger() {
    burger_wrapper.classList.toggle('active_burger')
    burger_nav.classList.toggle('active_nav')
    document.body.classList.toggle('lock')
    burger_menu.classList.toggle('burger_active')
    burger_hr.classList.toggle('burger_active')
}


burger_button.addEventListener('click', menuBurger)

// Burger end


// link start
let link = document.querySelectorAll('[data-link="getLink"]')
link.forEach(e => {
    e.addEventListener('click', () => {
        location.href = 'https://1wyfsk.com/v3/landing-page/casino#utux'
        console.log(e)
    })
});

console.log(link);


// link end
const promo = document.querySelector('.promo_code')



function modalStyle() {
    copy_modal.style = 'display: block'
    copy_modal.style.animation = 'copy 3s linear';

}
function timerModal() {
    console.log('11');
    copy_modal.style = 'display: none'
}

if (promo) {
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
}
