(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    form.classList.add('was-validated')
                } else {
                    inserir()
                    form.classList.remove('was-validated')
                    form.reset()
                }
                event.preventDefault()
                event.stopPropagation()
            }, false)
        })
})()