
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');


    let button = document.querySelector('.button')
    let selected = document.querySelectorAll('#selected')

    button.addEventListener('click', () => {
        selected.innerHTML = 'Hello'
    }) 
})
