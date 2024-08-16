// !1. Class Design:
//     - Define the Library class with attributes like name and books.
//     - Create a separate Book class with attributes like title, author, genre,
//     and available (to track borrowing).

class Book {
  constructor(title, auther, genre, isbn, available = true) {
    this.title = title;
    this.auther = auther;
    this.genre = genre;
    this.isbn = isbn;
    this.available = available;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.Book = [];
  }
  addBook(book) {
    this.Book.push(book);
    console.log(`Book "${book.title}" added to library.`);
  }
}

//create a new Library
let myLibrary = new Library("My Library");

// create book
let book1 = new Book("Title01", "Author01", "Genre", "1234");
let book2 = new Book("Title02", "Author02", "Genre", "1235");
let book3 = new Book("Title03", "Author03", "Genre", "1236");

// add book to library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
