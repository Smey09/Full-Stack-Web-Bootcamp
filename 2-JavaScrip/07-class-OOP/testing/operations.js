// !1. Class Design:
//     - Define the Library class with attributes like name and books.
//     - Create a separate Book class with attributes like title, author, genre,
//     and available (to track borrowing).

class Book {
  constructor(title, author, genre, isbn, available = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
    this.available = available;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
}

let Bib = new Library("LIB-1");

// !2. Adding Books:
const books = new Array();
books.push(new Book("Book OOP", "Author01", "Genre01", "isbn01"));
Bib.books = books;

console.log(Bib.books);
console.table(Book);
