const addExButton = document.getElementById('add-ex-link')
const indexSection = document.querySelector('.index-section')
const AddEx = document.querySelector('.add-ex-sect')
const showButton = document.getElementById('showlist')
const buildButton = document.getElementById('buildButton')
const buildSection = document.querySelector('.build-work-section')

function showList() {
    showButton.addEventListener('click', ()=> {
        indexSection.classList.toggle('sec-none')
        AddEx.classList.add('sec-none')
        buildSection.classList.add('sec-none')
        location.href = '#index'
    })
}

function showAdd() {
    addExButton.addEventListener('click', ()=> {
        AddEx.classList.toggle('sec-none')
        indexSection.classList.add('sec-none')
        buildSection.classList.add('sec-none')
        location.href = '#add-ex'
    })
}


function showWork() {
    buildButton.addEventListener('click', ()=> {
        buildSection.classList.toggle('sec-none')
        indexSection.classList.add('sec-none')
        AddEx.classList.add('sec-none')
        location.href = '#build-work'
    })
}
