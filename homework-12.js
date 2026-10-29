class IslamicBooks {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
  read() {
    console.log(`Чтение книги "${this.title}" автора ${this.author}`);
  }
}

class TawheedBook extends IslamicBooks {
  constructor(title, author, price, translation) {
    super(title, author, price);
    this.translation = translation;
  }
  showTranslation() {
    console.log(`Книга "${this.title}" переведена на ${this.translation}`);
  }
}

const tawheedBook = new TawheedBook("Китабу-Тавхид", "Мухаммад ибн Абдуль-Ваххаб", 800, "Русский");
console.log(tawheedBook);
tawheedBook.read();
tawheedBook.showTranslation();