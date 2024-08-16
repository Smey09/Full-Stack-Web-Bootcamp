import { Book } from "./Books.mjs";

// class Library
export class Library {
  #name;
  #books = [];
  constructor(name) {
    this.#name = name;
  }

  // Getter method (public accessor) for me
  getName() {
    return this.#name;
  }

  bookExists(isbn) {
    return this.#books.some((book) => book.getISBN() === isbn);
  }

  // add book
  addBook(addNewBook) {
    const { title, author, genre, isbn, available = true } = addNewBook;
    if (this.bookExists(isbn)) {
      console.log(`Book with ISBN "${isbn}" already exists in the library.`);
    } else {
      const newBook = new Book(title, author, genre, isbn, available);
      this.#books.push(newBook);
      console.log(`Book with ISBN "${isbn}" added to the library.`);
    }
  }

  // remove book from lib
  removBook(userInput) {
    const indexToremove = this.#books.findIndex(
      (book) => book.getISBN() === userInput || book.getTitle() === userInput
    );
    /* Way001 ====================
        if (indexToremove !== -1) {
            const removeBook = this.#books[indexToremove]
            if (removeBook.isAvailable()) {
                removeBook.setAvailable(false)
                console.log(`Book  ID:${userInput} - Title:${removeBook.getTitle()} removed!`);

            }else{
                console.log(`Book ID:${userInput} - Title:${removeBook.getTitle()} is already unavailable.`);
            }
        } else {
            console.log(`Book ID:${userInput} not found!!!`);
        }
        // return indexToremove         // index = 0
        const availabeBooks = this.#books.filter(book=>book.isAvailable())
        return availabeBooks.map(book=>book.getInfo());
        */
    /* Way002 ==================== */
    if (indexToremove !== -1) {
      this.#books.splice(indexToremove, 1);
      console.log(`Book ID:${userInput} was removed!`);
    } else {
      console.log(`Book ID:${userInput} not found!!!`);
    }
  }

  // search book by title, author, genre
  searchBook(userInput) {
    const results = this.#books.filter(
      (book) =>
        book.getTitle().toLowerCase().includes(userInput.toLowerCase()) ||
        book.getAuthor().toLowerCase().includes(userInput.toLowerCase()) ||
        book.getGenre().toLowerCase().includes(userInput.toLowerCase())
    );
    const resultSearch = results.map((book) => book.getInfo());
    console.log(`\nResult search(title,author,genre):`);
    return console.table(resultSearch);
  }

  // display all book in library
  displayBook() {
    const bookList = this.#books.map((book) => book.getInfo());
    return bookList;
  }

  /*
   * get book only available book
   */
  availableBook() {
    const availableBooks = this.#books.filter((book) => book.isAvailable());
    console.table(availableBooks.map((book) => book.getInfo()));
  }

  /**
   * Borrow book and return status available to unavailable
   */
  borrowBook(inputISBN) {
    const indexBook = this.#books.findIndex(
      (book) => book.getISBN() === inputISBN
    );
    // console.log(`File`,indexBook);
    if (indexBook !== -1) {
      const bookToBorrow = this.#books[indexBook];
      if (bookToBorrow.isAvailable()) {
        bookToBorrow.setAvailable(false);
        console.log(
          `Book ${this.#books[
            indexBook
          ].getTitle()} ID:${inputISBN} was borrowed!`
        );
      } else {
        console.log(
          `Book ${this.#books[
            indexBook
          ].getTitle()} ID:${inputISBN} not found!!!`
        );
      }
    } else {
      console.log(`Invalide ID:${inputISBN}`);
    }
  }

  /**
   * return book after borrow,
   */
  returnBooks(inputTitle) {
    const indexBook = this.#books.findIndex(
      (book) => book.getTitle().toLowerCase() === inputTitle.toLowerCase()
    );
    if (indexBook !== -1) {
      const isBorrowBook = this.#books[indexBook];
      if (!isBorrowBook.isAvailable()) {
        isBorrowBook.setAvailable(true);
        console.log(
          `Book ${this.#books[
            indexBook
          ].getTitle()} - ID:${inputTitle} returned!`
        );
      } else {
        console.log(
          `Book ${this.#books[
            indexBook
          ].getTitle()} - ID:${inputTitle} not return!!!`
        );
      }
    } else {
      console.log(`Book ID:${inputTitle} not found!!!`);
    }
  }
}
