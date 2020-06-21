const buildWorkoutSec = document.querySelector('.build-work-section')

let buildCont = document.createElement('div')
buildWorkoutSec.appendChild(buildCont)

let buildTitle = document.createElement('h3')
buildCont.appendChild(buildTitle)
buildTitle.innerText = 'Build'
buildTitle.className = 'build-title'