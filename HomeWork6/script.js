// Домашнє завдання
// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

class Order {
  constructor(orderNumber) {
    this.products = [];
    this.orderNumber = orderNumber;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getOrderTotal() {
    let total = 0;
    for (let product of this.products) {
      total += product.getTotalPrice();
    }
    return total;
  }

  printSummary() {
    console.log(`Order #${this.orderNumber}:`);
    for (let product of this.products) {
      console.log(
        `${product.name} — $${product.price} x ${
          product.quantity
        } = $${product.getTotalPrice()}`
      );
    }
    console.log('Total: $' + this.getOrderTotal());
  }
}

const apple = new Product('Apple', 2, 5); // $10
const banana = new Product('Banana', 1, 10); // $10

const order1 = new Order(101);
order1.addProduct(apple);
order1.addProduct(banana);

order1.printSummary();
