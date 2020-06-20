const addExButton = document.getElementById('add-ex-link')
const indexSection = document.querySelector('.index-section')
const AddEx = document.querySelector('.add-ex-sect')
const showButton = document.getElementById('showlist')

function showList() {
    showButton.addEventListener('click', ()=> {
        indexSection.classList.toggle('sec-none')
        AddEx.classList.add('sec-none')
    })
}

function showAdd() {
    addExButton.addEventListener('click', ()=> {
        AddEx.classList.toggle('sec-none')
        indexSection.classList.add('sec-none')
    })
}



