class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  isValid() {
    return this.sellIn > 0;
  }

  priceShouldChange() {
    return this.name != 'Mega Coverage';
  }

  priceShouldDecrese() {
    return this.name != 'Special Full Coverage' && this.name != 'Full Coverage';
  }

  getModificationRate() {
    if (this.name == 'Special Full Coverage') {
       if (!this.isValid()) {
          return -1 * this.price;
       } if (this.sellIn < 6) {
          return 3;
       } else if (this.sellIn < 11){
          return 2;
       }
    }
    if (this.name == 'Super Sale') {
      return 2;
    }
    if (!this.isValid()) {
      return 2;
    }
    return 1;
  }
  updatePrice() {
    if (this.priceShouldChange()) {
      var originalPrice = this.price;
      if (this.priceShouldDecrese()) {
          this.price = this.price - this.getModificationRate();
      } else {
          this.price = this.price + this.getModificationRate();
      }
      if (this.price > 50) {
        this.price = 50;
      }
      if (this.price < 0) {
        this.price = originalPrice;
      }
      this.sellIn -= 1;
    }
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
        this.products[i].updatePrice()
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
