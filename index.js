class User {
  constructor(name, surname, pets) {
    this.name = name;
    this.surname = surname;
    this.books = [];
    this.pets = [pets];
  }

  getFullName = () => {
    return `My name is: "${this.name} ${this.surname}"`;
  };

  addPets = (pet) => {
    this.pets.push(pet);
  };

  countPets = () => {
    return this.pets.length;
  };

  addBooks = (book, author) => {
    this.books.push({ title: book, author: author });
  };

  getBooks = () => {
    this.books.map((book) => {
      return console.log(`Title: ${book.title} - Author: ${book.author}`);
    });
  };
}

const USER_ONE = new User("Quentin", "Tarantino", "Cat");

console.log(USER_ONE.getFullName());

USER_ONE.addPets("Dog");
console.log(`Total Pets: ${USER_ONE.countPets()}`);

USER_ONE.addBooks("The Cask of Amontillado", "Edgar Allan Poe");
USER_ONE.addBooks("The Raven ", "Edgar Allan Poe");
USER_ONE.getBooks();
