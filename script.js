const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const  includeNumbersElement = document.getElementById('includeNumbers')
const  includeSymbolsElement = document.getElementById('includeSymbols')

const form = document.getElementById('passwordGeneratorForm')
characterAmountNumber.addEventListener('input',syncCharacterAmount)
characterAmountRange.addEventListener('input',syncCharacterAmount)

form.addEventListener('submit',e =>{
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumber = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked


})


function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value= value
}
