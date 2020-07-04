
(function () {
    axios.get('http://localhost:8081/read')
        .then(res => {
            res.data.forEach(ex => {
                const exCon = document.getElementById('ex-index')
                const exDiv = document.createElement('div');
                exDiv.className = 'eachex'
                exCon.appendChild(exDiv);

                const id = document.createElement('p')
                id.innerText = ex.e_id
                exDiv.appendChild(id)
                id.style.display = 'none'

                const name = document.createElement('h3');
                name.innerText = ex.name;
                exDiv.appendChild(name);

                exDiv.addEventListener('click', () => {
                    getOneEx();
                })
                const category = document.createElement('p');
                category.innerText = ex.category;
                exDiv.appendChild(category);

                function getOneEx() {

                    axios.get('http://localhost:8081/read/' + ex.e_id)
                        .then(({ data: ex }) => {

                            exIndex.innerHTML = '';
                            const exDisplay = document.createElement('div')
                            exIndex.appendChild(exDisplay)

                            const name = document.createElement('h3')
                            name.innerText = ex.name
                            exIndex.appendChild(name)

                            const category = document.createElement('h4')
                            category.innerText = ex.category
                            exIndex.appendChild(category)

                            const image = document.createElement('img')
                            image.src = ex.imageMain;
                            image.className = 'ex-image'
                            exIndex.appendChild(image);

                            const deleteButton = document.createElement('button')
                            deleteButton.innerText = 'DELETE'
                            exIndex.appendChild(deleteButton)

                            deleteButton.addEventListener('click', () => {
                                axios.delete('http://localhost:8081/delete/' + ex.e_id)
                                location.reload();
                            })

                            const updateButton = document.createElement('button')
                            updateButton.innerText = 'UPDATE'
                            exIndex.appendChild(updateButton)

                            updateButton.addEventListener('click', () => {
                                window.location.href = '#build-work'

                                document.getElementById('updateName').value = ex.name;
                                document.getElementById('updateImage').value = ex.imageMain
                                document.getElementById('updateCatSelect').value = ex.category
                                    const catSelectUpdate = document.getElementById('updateCatSelect')
                                    catSelectUpdate.addEventListener('click', () => {
                                        catSelectUpdate.options[0].disabled = true
                                    })
                                    document.getElementById('updateButton').addEventListener('click', (e) => {
                                        e.preventDefault();
                                        let info = {};
                                        document.querySelectorAll('#update-ex-form > input, #update-ex-form > select').forEach(x => info[x.name] = x.value);
                                        axios.put('http://localhost:8081/update/' + ex.e_id, info)
                                            .then(res => console.log(res))
                                            .catch(err => console.error(err));
                                            location.reload();
                                    });
                            })
                         
                        })
                }
            })
        })
        .catch(err => console.log(err))
})();



(function () {
    axios.get('http://localhost:8081/wo/read')
        .then(res => {
            res.data.forEach(wo => {
                const woCon = document.getElementById('wo-index')

                const woDiv = document.createElement('div')
                woDiv.className = 'eachWo'
                woCon.appendChild(woDiv)

                const title = document.createElement('h3')
                title.innerText = wo.title
                woDiv.appendChild(title)

                wo.exercise.forEach(ex => {
                    const exName = document.createElement('p')
                    exName.innerText = ex.name
                    woDiv.appendChild(exName)
                })
            })
        })
})();