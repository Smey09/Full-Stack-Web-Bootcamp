class Book {
  constructor(title, author, genre, isbn) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isbn = isbn;
  }

  getTitle() {
    return this.title;
  }

  getISBN() {
    return this.isbn;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.borrowed_books = [];
  }

  borrowBook(book) {
    // Implement borrowing logic based on user type (Admin/Student)
    if (this.canBorrow()) {
      this.borrowed_books.push(book);
      console.log(`${this.name} borrowed "${book.getTitle()}"`);
    } else {
      console.log(`${this.name} cannot borrow more books.`);
    }
  }

  viewBorrowedBooks() {
    console.log(`${this.name}'s borrowed books:`);
    // this.borrowed_books.forEach((book) =>
    //   console.log(`- ${book.getTitle()} (${book.getISBN()})`)
    // );
  }

  canBorrow() {
    // To be implemented in subclasses (Admin, Student)
    return true; // Default behavior, to be overridden
  }
}

class Admin extends User {
  constructor(name) {
    super(name);
  }

  // Admin can borrow unlimited books
  canBorrow() {
    return true;
  }
}

class Student extends User {
  constructor(name) {
    super(name);
  }

  // Students can borrow up to 5 books
  canBorrow() {
    return this.borrowed_books.length < 5;
  }
}

// Create instances of Admin and Student
const adminUser = new Admin("Admin1");
const studentUser = new Student("Student1");

// Create some Book instances
const book1 = new Book("Title1", "Author1", "Genre1", "ISBN1");
const book2 = new Book("Title2", "Author2", "Genre2", "ISBN2");
const book3 = new Book("Title3", "Author3", "Genre3", "ISBN3");
const book4 = new Book("Title4", "Author4", "Genre4", "ISBN4");
const book5 = new Book("Title5", "Author5", "Genre5", "ISBN5");
const book6 = new Book("Title6", "Author6", "Genre6", "ISBN6");

// Admin borrowing books
adminUser.borrowBook(book1);
adminUser.borrowBook(book2);
adminUser.borrowBook(book3);
adminUser.viewBorrowedBooks(); // Should show all 3 books

// Student borrowing books
studentUser.borrowBook(book4);
studentUser.borrowBook(book5);
studentUser.borrowBook(book6); // This will exceed the limit
studentUser.viewBorrowedBooks(); // Should show only 2 books
