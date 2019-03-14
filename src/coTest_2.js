class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name != 'Mega Coverage') {
        var originalPrice = this.products[i].price;
        if (this.products[i].name == 'Special Full Coverage') {
          if (this.products[i].sellIn < 1) {
            this.products[i].price = 0;
          } else if (this.products[i].sellIn < 11) {
            this.products[i].price = this.products[i].price + 2;
            if (this.products[i].sellIn < 6)
              this.products[i].price = this.products[i].price + 1;
          } else {
            this.products[i].price = this.products[i].price + 1;
          }
        }
        if (this.products[i].name == 'Full Coverage') {
          if (this.products[i].sellIn < 1) 
            this.products[i].price = this.products[i].price + 1;
          this.products[i].price = this.products[i].price + 1;
        }
        if (this.products[i].name != 'Special Full Coverage' && this.products[i].name != 'Full Coverage') {
          this.products[i].price = this.products[i].price - 1;
          if (this.products[i].sellIn < 1) 
            this.products[i].price = this.products[i].price - 1; 
          if (this.products[i].name == 'Super Sale') {
            this.products[i].price = this.products[i].price - 1;
          }
        }
        if (this.products[i].price > 50) {
          this.products[i].price = 50;
        }
        if (this.products[i].price < 0) {
          this.products[i].price = originalPrice;
        }
        this.products[i].sellIn = this.products[i].sellIn - 1;
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
