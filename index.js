//References:
const personForm = document.querySelector('form#personForm')
const italicsBtn = document.querySelector('.italicsBtn')
const boldBtn = document.querySelector('.boldBtn')
const underBtn = document.querySelector('.underBtn')
const resetBtn = document.querySelector('.resetBtn')

//Booleans
var italicClicked = false
var boldClicked = false
var underlineClicked = false



/**
 * Method to handle the submitting of form via a button
 * 
 * @param {*} ev 
 */
function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const bday = f.personBday.value
    const textColor = f.textColor.value
    const backColor = f.backColor.value
    const details = document.querySelector('#details')

    //Other way to make a text object in line
    // details.innerHTML = `<em>${name}</em>`

    //Creating an elemnt in pure js:
    const em = document.createElement('em')
    em.textContent = name

    details.appendChild(em)

    document.querySelector('h1').textContent = name
    document.querySelector('h2').textContent = bday

    document.querySelector('#P1').style.color = textColor
    document.querySelector('h1').style.color = textColor
    document.querySelector('h2').style.color = textColor

    document.bgColor = backColor
}

/**
 * Method to handle the italicizing of text via a button
 * 
 * @param {*} ev 
 */
function handleItalic(ev) {

    if (italicClicked == true) {
        document.querySelector('#P1').style.fontStyle = "normal"
        italicClicked = false

    } else {

        document.querySelector('#P1').style.fontStyle = "italic"
        italicClicked = true
    }
}

/**
 * Method to handle the bolding of text via a button
 * 
 * @param {*} ev 
 */
function handleBold(ev) {

    if (boldClicked == true) {
        document.querySelector('#P1').style.fontWeight = "normal"
        boldClicked = false

    } else {

        document.querySelector('#P1').style.fontWeight = "bold"
        boldClicked = true
    }

}

/**
 * Method to handle the underlining of text via a button
 * 
 * @param {*} ev 
 */
function handleUnderline(ev) {

    if (underlineClicked == true) {
        document.querySelector('#P1').style.textDecoration = "none"
        underlineClicked = false

    } else {

        document.querySelector('#P1').style.textDecoration = "underline"
        underlineClicked = true
    }
}


//Action listeners for each button that call the appropriate method

personForm.addEventListener('submit', handleSubmit)
italicsBtn.addEventListener('click', handleItalic)
boldBtn.addEventListener('click', handleBold)
underBtn.addEventListener('click', handleUnderline)



