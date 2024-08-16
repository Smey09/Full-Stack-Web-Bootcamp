import { Book } from "./Books.mjs";

// class User
export class User {
    #name;
    #borrowed_books;
    #role;
    constructor(name,role='normal') {
        this.#name = name;
        this.#borrowed_books = [];
        this.#role = role;
    }
    // setter 
    getName() { return this.#name }
    getRole(){return this.#role}
    // define method borrow true
    canBorrow() { 
        if(this.#role === 'admin'){
            return true;
        }else{
            return this.#borrowed_books.length<5;
        }
    }
    // method borrow book
    borrowBook(book) {
        if (this.canBorrow()) {
            this.#borrowed_books.push(book);
            console.log(`${this.#name} borrowed Book: ${book.title}`);
        } else {
            console.log(`${this.#name} cannot borrow more books!!!`);
        }
    }

    // method viewbook
    viewBorrowedBooks() {
        console.log(`${this.#name} has borrowed the following books:`);
        this.#borrowed_books.forEach(book =>
            console.table(`${book.title} - ${book.isbn}`)
        );
    }

    // display book
}