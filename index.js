
const promo = document.querySelector('.promo_code')
console.log(copy.textContent);





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