//! 4. User Accounts:
//     * Create a User class with attributes like name and borrowed_books.
//     * Implement methods for users to:
//         - Borrow books
//         - View their borrowed books

//     * Additional Considerations:

//         - What properties in above class should be prevented access or modified?
//         - What if there are multiple types of users like Admin, Student?
//         - What if we want to limit some rules when borrowing books?
//           For example: students are able to borrow up to 5 books while admin has no limit.
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

  addBook(book) {
    this.books.push(book);
  }

  findBook(isbn) {
    return this.books.find((book) => book.isbn === isbn);
  }

  borrowBook(isbn, user) {
    const book = this.findBook(isbn);
    if (book && book.available && user.borrowBook(book)) {
      book.available = false;
      return true;
    }
    return false;
  }

  returnBook(isbn, user) {
    const book = this.findBook(isbn);
    if (book && !book.available && user.returnBook(book)) {
      book.available = true;
      return true;
    }
    return false;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = new Set(); // Set to store borrowed book ISBNs
  }

  borrowBook(book) {
    if (this.borrowedBooks.size > 4) {
      console.log(
        `${this.name}, you've reached the borrowing limit.(5 books only)`
      );
      return false;
    }
    this.borrowedBooks.add(book.isbn);
    console.log(`${this.name} borrowed ${book.title} successfully.`);
    return true;
  }

  returnBook(book) {
    if (this.borrowedBooks.has(book.isbn)) {
      this.borrowedBooks.delete(book.isbn);
      console.log(`${this.name} returned ${book.title} successfully.`);
      return true;
    }
    return false;
  }

  viewBorrowedBooks() {
    console.log(
      `${this.name}'s borrowed books: ${[...this.borrowedBooks].join(", ")}`
    );
  }
}

class Admin extends User {
  borrowBook(book) {
    this.borrowedBooks.add(book.isbn);
    console.log(`${this.name} borrowed ${book.title} successfully.`);
    return true;
  }
}

const library = new Library("City Library");

const books = [
  ["Book Python Django", "Python Django", "Python", "01"],
  ["Book Java OOP", "Java OOP", "Java", "02"],
  ["Book Figma", "Figma", "Figma", "03"],
  ["Book JavaScript", "JavaScript", "JavaScript", "04"],
  ["Book Dart", "Dart", "Dart flutter", "05"],
  ["Book Structure C++", "Structure C++", "C++", "06"],
  ["Book Laravel", "Laravel", "PHP", "07"],
];

books.forEach(([title, author, genre, isbn]) => {
  library.addBook(new Book(title, author, genre, isbn));
});

const user1 = new User("Alice");
library.borrowBook("01", user1); // Alice borrowed Book One successfully.
library.borrowBook("02", user1);
library.borrowBook("03", user1);
library.borrowBook("04", user1);
library.borrowBook("05", user1);
library.borrowBook("06", user1);
library.borrowBook("07", user1);
user1.viewBorrowedBooks(); // Alice's borrowed books: 1111, 2222

// library.returnBook("1111", user1);
// user1.viewBorrowedBooks();

// const admin = new Admin("Bob");
// library.borrowBook("1111", admin); // Bob borrowed Book One successfully.
// admin.viewBorrowedBooks(); // Bob's borrowed books: 1111

// library.returnBook("1111", admin); // Bob returned Book One successfully.
// admin.viewBorrowedBooks(); // Bob's borrowed books:
