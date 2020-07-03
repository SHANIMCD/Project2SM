

(function () {
    const catSelect = document.getElementById('catSelect')
    catSelect.addEventListener('click', () => {
        catSelect.options[0].disabled = true
    })
    document.getElementById('submitButton').addEventListener('click', (e) => {
        e.preventDefault();
        let info = {}
        document.querySelectorAll('#ex-form > input, #ex-form > select').forEach(x => info[x.name] = x.value);
        axios.post('http://localhost:8081/create', info)
            .catch(err => console.log(err))
        location.reload();
    })


})();
