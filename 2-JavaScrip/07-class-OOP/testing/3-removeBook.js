//! 2. Basic Operations:
//     * Implement methods for:
//         - Adding a book to the library
//         - Removing a book (by title or ISBN)
//         - Searching for books by title, author, or genre
//         - Displaying a list of all available books

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
  // add book
  addBook(book) {
    const exitingBook = this.books.find((b) => b.isbn === book.isbn);
    if (exitingBook) {
      console.log(`Book with ISBN ${book.isbn} already exist in the library.`);
    } else {
      this.books.push(book);
      console.log(`Book "${book.title}" add to library.`);
    }
  }

  // remove book
  removeBook(iD) {
    let isRemoved = false;
    const indexToRemove = this.books.findIndex(
      (b) => b.isbn === iD || b.title == iD
    );
    if (indexToRemove !== -1) {
      this.books.splice(indexToRemove, 1);
      isRemoved = true;
      console.log(`Book with ${iD} removed`);
    } else {
      console.log(`Book with ${iD} not found!!!`);
    }
  }
}

// create new library
let myLIB = new Library("NU-LIB");
// create book
let book1 = new Book("Title01", "Author01", "Genre", "1234");
let book2 = new Book("Title02", "Author02", "Genre", "1235");
let book3 = new Book("Title03", "Author03", "Genre", "1236");
myLIB.addBook(book1);
myLIB.addBook(book2);
myLIB.addBook(book3);
console.table(myLIB.books);

// remove book by title
myLIB.removeBook("Title01");
console.table(myLIB.books);
