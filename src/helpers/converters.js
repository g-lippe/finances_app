



function textToNumber(text) {
    text = text.toString().replace('.', '').replace(',', '').replace(/\D/g, '')

    return text
}

function moneyMask(typed_value) {
    typed_value = textToNumber(typed_value)


    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('pt-BR', options).format(
        parseFloat(typed_value) / 100
    )

    //console.log(result)

    return 'R$ ' + result
}

function moneyToNumber(text) {
    text = text.toString().replace('.', '').replace(',', '').replace(/\D/g, '')
    let value = parseFloat(text)

    return value
}


module.exports = {
    textToNumber,
    moneyMask,
    moneyToNumber
}