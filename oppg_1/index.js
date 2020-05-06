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
    form.innerHTML = ''
    form.innerHTML += '<h1>Hei ' + name.value + '!</h1>'
    form.innerHTML += '<p>Vi ønsker å bli bedre kjent med deg og dine fritidsinteresser, og ville satt stor pris på om du oppgir disse tilleggsopplysningene.</p>'
    form.innerHTML += '<p>Hva er dine 3 favorittaktiviteter på fritiden?</p>'

    const inp1 = document.createElement('input')
        inp1.innerHTML = '<label>1.</label>'
       
    form.appendChild(inp1)

    const inp2 = document.createElement('input')
        inp2.innerHTML = '<label>2.</label>'
       
    form.appendChild(inp2)

    const inp3 = document.createElement('input')
        inp3.innerHTML = '<label>3.</label>'
       
    form.appendChild(inp3)

    
    const yesOkButton = document.createElement('button')
        yesOkButton.innerHTML = 'NESTE'
        yesOkButton.addEventListener('click', function() {
            form.innerHTML = ''
            form.innerHTML = '<p>Supert! Kan vi stille deg noen siste spørmål om deg og dine interesser? Disse vil bli brukt til vår undesøkelse og er helt frivillig å svare på.</p>'


            const yesOfCourseButton = document.createElement('button')
                yesOfCourseButton.innerHTML = 'JA'
                yesOfCourseButton.addEventListener('click' function() {
                    form.innerHTML = ''
                    form.innerHTML += 'Takk for at du velger å svare på disse spørsmålene! Det er fortsatt mulighet for å gå videre før du har fyllt inn alle svarene.'

                    form.innerHTML = '<label>Hvor mange ganger i uka driver du med en fritidsaktivitet?</label>'
                    const inp4 = document.createElement('input')
                    form.appendChild(inp4)

                    form.innerHTML = '<label>Hva synes du om fritidstilbudet i Oslo kommune?</label>'
                    const inp5 = document.createElement('input')
                    orm.appendChild(inp5)

                    form.innerHTML = '<label>Hva savner du av fritidstilbud i Oslo kommune?</label>'
                    const inp6 = document.createElement('input')
                    form.appendChild(inp6)
                })
            
            form.appendChild(yesOfCourseButton)

            const notNowButton = document.createElement('button')
                notNowButton.innerHTML = 'HOPP OVER'
            
            form.appendChild(notNowButton)
    })

    form.appendChild(yesOkButton)

    const laterButton = document.createElement('button')
    laterButton.innerHTML = 'HOPP OVER'

    form.appendChild(laterButton)
}