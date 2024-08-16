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

  // search book by title, author, genre
  searchBooks(criteria) {
    const { title, author, genre } = criteria;
    const results = this.books.filter(
      (book) =>
        (!title || book.title.toLowerCase().includes(title.toLowerCase())) &&
        (!author || book.author.toLowerCase().includes(author.toLowerCase())) &&
        (!genre || book.genre.toLowerCase().includes(genre.toLowerCase()))
    );
    return results;
  }

  // display book are available
  displayBook() {
    const isAvialableBook = this.books.filter((b) => b.available);
    console.log(isAvialableBook);
  }

  // update book
  updateBook(isbns, updatedBookData) {
    const { isbn, title, author } = isbns;
    const indexToUpdate = this.books.findIndex(
      (book) =>
        book.isbn === isbn || book.title === title || book.author === author
    );
    if (indexToUpdate !== -1) {
      this.books[indexToUpdate] = {
        ...this.books[indexToUpdate],
        ...updatedBookData,
      };
      console.log(`Book with ISBN ${isbn} updated successfully.`);
    } else {
      console.log(`Book with ISBN ${isbn} not found in the library.`);
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
// console.table(myLIB.books);

// // remove book by isbn
// myLIB.removeBook("1236");
// console.table(myLIB.books);
// // remove book by title
// myLIB.removeBook("Title01");
// console.table(myLIB.books);

// // search book
// let handleSearch = { title: "", author: "Author01" };
// let getResult = myLIB.searchBooks(handleSearch);
// console.log("Search Results:", getResult);

// // update book
// let updatedBookData = { title: "001", author: "002", genre: "ABC", available: false };
// myLIB.updateBook({isbn:"1234"}, updatedBookData);

// display book
let availableBook = myLIB.displayBook();
console.log(availableBook);
// console.table(myLIB.books);