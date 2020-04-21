let name = document.querySelector('#name')
let email = document.querySelector('#email')
let pass = document.querySelector('#pass')
let accept = document.querySelector('#accept')
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')

submit.addEventListener('click', okButton)

function okButton() {
    console.log(name.value, email.value, pass.value)
    info()
}

function info() {
    form.innerHTML = ""
    form.innerHTML += '<h1>Hei ' + name.value + '!</h1>'
    form.innerHTML += '<p>Vi ønsker å bli bedre kjent med deg og dine fritidsinteresser, og ønsker derfor at du oppgir disse tilleggsopplysningene.</p>'
    
    const yesOkButton = document.createElement('button')
    yesOkButton.innerHTML = 'OK'

    form.appendChild(yesOkButton)

    const laterButton = document.createElement('button')
    laterButton.innerHTML = 'HOPP OVER'

    form.appendChild(laterButton)
}