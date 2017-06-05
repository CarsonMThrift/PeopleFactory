const personForm = document.querySelector('form#personForm')
// const submitBtn = document.querySelector('#submitButton')
// const italicsBtn = document.querySelector('italicsBtn')
// const boldBtn = document.querySelector('boldBtn')
// const underBtn = document.querySelector('underBtn')


function handleSubmit(ev){
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const bday = f.personBday.value
    const textColor = f.textColor.value
    const backColor = f.backColor.value

    document.querySelector('h1').textContent = name
    document.querySelector('h2').textContent = bday
    document.querySelector('#P1').style.color = textColor
    document.bgColor = backColor
}

// function handleItalic(ev){
//     ev.preventDefault()
//     document.querySelector('#P1').style.font = "italic"
// }

// function handleBold(ev){
//     ev.preventDefault()
//     document.querySelector('#P1').style.font = "bold"
// }

// function handleUnderline(ev){
//     ev.preventDefault()
//     document.querySelector('#P1').style.font = "underline"
// }

personForm.addEventListener('submit', handleSubmit)
// italicsBtn.addEventListener('submit', handleItalic)
// boldBtn.addEventListener('submit', handleBold)
// underBtn.addEventListener('submit', handleUnderline)


