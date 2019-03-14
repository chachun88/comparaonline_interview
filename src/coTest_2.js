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
    if (!this.isValid() || this.name == 'Super Sale') {
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
        if (this.name == 'Special Full Coverage') {
          if (!this.isValid()) {
            this.price = 0;
          } else if (this.sellIn < 11) {
            this.price += 2;
            if (this.sellIn < 6)
              this.price += 1;
          } else {
            this.price += 1;
          }
        } else {
          this.price = this.price + this.getModificationRate();
        }
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
