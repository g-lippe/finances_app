function textToNumber(text) {
    // Convert the input to a string to ensure replace method works
    const cleanedText = text.toString().replace(/[^0-9-+]/g, '');
    return parseFloat(cleanedText);
  }
  
  function moneyMask(typed_value) {
    typed_value = textToNumber(typed_value);
  
    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat('pt-BR', options).format(
      parseFloat(typed_value) / 100
    );
  
    return 'R$ ' + result;
  }
  
  function moneyToNumber(text) {
    text = text.toString().replace('.', '').replace(',', '').replace(/\D/g, '');
    let value = parseFloat(text);
  
    return value;
  }
  
  module.exports = {
    textToNumber,
    moneyMask,
    moneyToNumber
  };