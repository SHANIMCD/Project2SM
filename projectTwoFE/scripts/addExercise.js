function formElements() {
    const addEContainer = document.createElement('div');
    AddEx.appendChild(addEContainer)
    addEContainer.className = 'form-container';

    const formContainer = document.createElement('form')
    addEContainer.appendChild(formContainer)
    
    let nameInput = document.createElement('input')
    formContainer.appendChild(nameInput)
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter exercise name';

    let categorySelection = document.createElement('select')
    formContainer.appendChild(categorySelection)
    categorySelection.placeholder = 'Select category';

        let categorySelectOption = document.createElement('option')
        categorySelection.appendChild(categorySelectOption)
        categorySelectOption.innerText = 'Select a Category'

        let catHeartrate = document.createElement('option')
        categorySelection.appendChild(catHeartrate)
        catHeartrate.innerText = 'Heartrate'

        let catStrength = document.createElement('option')
        categorySelection.appendChild(catStrength)
        catStrength.innerText = 'Strength'

        let catHolistic = document.createElement('option')
        categorySelection.appendChild(catHolistic)
        catHolistic.innerText = 'Holisitc'

    let imageMain = document.createElement('input')
    formContainer.appendChild(imageMain)
    imageMain.placeholder = 'add image URL'


    let moreImgPrompt = document.createElement('div')
    moreImgPrompt.className = 'imgprompt'

    let moreImgContainer = document.createElement('div')
    formContainer.appendChild(moreImgContainer)

    formContainer.appendChild(moreImgPrompt)
    moreImgPrompt.innerText = 'More photos? ';

        moreImgPrompt.addEventListener('click', ()=> {
            let imageTwo = document.createElement('input')
            moreImgContainer.appendChild(imageTwo)
            imageTwo.placeholder = 'add image URL'
        
            let imageThree = document.createElement('input')
            moreImgContainer.appendChild(imageThree)
            imageThree.placeholder = 'add image URL'

            moreImgPrompt.style.display = 'none'

        }, {once : true})

    let formSubmit = document.createElement('button')
    formContainer.appendChild(formSubmit)
    formSubmit.innerText = 'submit'
 
    }