const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}
//fromEuroToDollar
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
//fromDollarToYen
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 130;
    return valueInYen;
}

//fromYenToPound
const fromYenToPound = function(valueInYen) {
    let valueInPound= valueInYen * 0.9;
    return valueInPound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}