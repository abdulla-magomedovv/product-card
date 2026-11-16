class Drink {
  #temperature;
  constructor(name, price, size, temperature) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Напиток: ${this.name} Цена: ${this.price} Размер: ${this.size} Температура: ${this.#temperature}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
    console.log(`Установка температуры ${this.name}: ${temperature}`);
  }

  #prepare() {
    console.log(`Начинается приготовление ${this.name}`);
    this.make();
    console.log(`Приготовление завершено ${this.name}`);
  }

  make() {
    throw new Error("Способ приготовления должен быть определён в классе напитка");
  }

  serve() {
    console.log(`Готовим ${this.name} к подаче`);
    this.#prepare();
    console.log(`Напиток ${this.name} подан клиенту!`);
  }
}

class Coffee extends Drink {
  constructor(name, price, size, temperature, beanType, milkType) {
    super(name, price, size, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  make() {
    console.log(`Используем зерна для кофе ${this.beanType}`);
    console.log(`Используем молоко ${this.milkType}`);
    this.setTemperature(70);
  }
}

class Tea extends Drink {
  constructor(name, price, size, temperature, teaType, sugar) {
    super(name, price, size, temperature);
    this.teaType = teaType;
    this.sugar = sugar;
  }

  make() {
    console.log(`Используем вид чая ${this.teaType}`);
    console.log(`Добавляем ${this.sugar} ложек сахара`);
    this.setTemperature(50);
  }
}

class Lemonade extends Drink {
  constructor(name, price, size, temperature, lemonType, syrup, carbonated) {
    super(name, price, size, temperature);
    this.lemonType = lemonType;
    this.syrup = syrup;
    this.carbonated = carbonated;
  }

  make() {
    console.log(`Используем вид ${this.lemonType}`);
    console.log(`Используем сироп ${this.syrup}`);
    console.log(`Газированный: ${this.carbonated}`);
    this.setTemperature(5);
  }
}

class MilkShake extends Drink {
  constructor(name, price, size, temperature, flavor, topping) {
    super(name, price, size, temperature);
    this.flavor = flavor;
    this.topping = topping;
  }

  make() {
    console.log(`Используем вкус ${this.flavor}`);
    console.log(`Используем добавку ${this.topping}`);
    this.setTemperature(5);
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    console.log("Информация о кафе");
    return `${this.name}, ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Заказ ${drink.name} кафе ${this.name}`);
    drink.serve();
    console.log(`Стоимость заказа составляет: ${drink.price}`);
  }
}

const cafe = new Cafe("Папаха", "Махачкала");
const coffee = new Coffee("Латте", 250, "300 мл", 80, "Арабика", "Коровье молоко");
const tea = new Tea("Зелёный чай", 150, "300 мл", 60, "Зелёный", 2);
const lemonade = new Lemonade("Лимонный лимонад", 250, "500 мл", 5, "Лимонный", "Лимонный сироп", true);
const milkShake = new MilkShake("Шоколадный милкшейк", 300, "400 мл", 5, "Шоколадный", "Взбитые сливки");

console.log(cafe.getInfo());

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
cafe.orderDrink(milkShake);

console.log(coffee.getInfo());
console.log(tea.getInfo());
console.log(lemonade.getInfo());
console.log(milkShake.getInfo());
