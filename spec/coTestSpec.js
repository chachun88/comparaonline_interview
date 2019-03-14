const expect = require('chai').expect;

const coTest = require('../src/coTest_2');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("Special Full Coverage valid date", function() {
    const productsAtDayZero = new CarInsurance([
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', 0, 80),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6),
    ]);
    for (var i = 1; i <= 1; i++) {
      products = productsAtDayZero.updatePrice();
    }
    expect(products[5].name).equal("Special Full Coverage");
    expect(products[5].price).equal(21);
    expect(products[5].sellIn).equal(14);
  });


  it("Special Full Coverage invalid date", function() {
    const productsAtDayZero = new CarInsurance([
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', 0, 80),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6),
    ]);
    for (var i = 1; i <= 5; i++) {
      products = productsAtDayZero.updatePrice();
    }
    expect(products[7].name).equal("Special Full Coverage");
    expect(products[7].price).equal(50);
    expect(products[7].sellIn).equal(0);
  });

  it("Full Coverage valid date", function() {
    const productsAtDayZero = new CarInsurance([
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', 0, 80),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6),
    ]);
    for (var i = 1; i <= 1; i++) {
      products = productsAtDayZero.updatePrice();
    }
    expect(products[1].name).equal("Full Coverage");
    expect(products[1].price).equal(1);
    expect(products[1].sellIn).equal(1);
  });

  it("Full Coverage invalid date", function() {
    const productsAtDayZero = new CarInsurance([
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', 0, 80),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6),
    ]);
    for (var i = 1; i <= 5; i++) {
      products = productsAtDayZero.updatePrice();
    }
    expect(products[1].name).equal("Full Coverage");
    expect(products[1].price).equal(8);
    expect(products[1].sellIn).equal(-3);
  });

  it("Other products valid date", function() {
    const productsAtDayZero = new CarInsurance([
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', 0, 80),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6),
    ]);
    for (var i = 1; i <= 9; i++) {
      products = productsAtDayZero.updatePrice();
    }
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].price).equal(11);
    expect(products[0].sellIn).equal(1);
  });

  it("Other products invalid date", function() {
    const productsAtDayZero = new CarInsurance([
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', 0, 80),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 49),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6),
    ]);
    for (var i = 1; i <= 15; i++) {
      products = productsAtDayZero.updatePrice();
    }
    expect(products[0].name).equal("Medium Coverage");
    expect(products[0].price).equal(0);
    expect(products[0].sellIn).equal(-5);
  });

});
