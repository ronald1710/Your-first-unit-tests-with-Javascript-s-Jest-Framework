const { sum, fromYenToPound, fromEuroToDollar, fromDollarToYen } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
      expect(fromEuroToDollar(3.5)).toBe(4.2); 
});
test("One dolar should be 130 yen", function(){
    expect(fromDollarToYen(2.5)).toBe(325); 
});
test("One yen should be 0.9 pound", function(){
    expect(fromYenToPound(5.5)).toBe(4.95); 
})
