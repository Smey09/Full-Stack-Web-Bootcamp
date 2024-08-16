// class Book
export class Book {
    #title;
    #author;
    #genre;
    #isbn;
    #available;
    constructor(title, author, genre, isbn, available = true) {
        this.#title = title;
        this.#author = author;
        this.#genre = genre;
        this.#isbn = isbn;
        this.#available = available;
    }

    // define getter
    getTitle() { return this.#title; }
    getAuthor() { return this.#author; }
    getGenre() { return this.#genre; }
    getISBN() { return this.#isbn }
    isAvailable() { return this.#available }
    getInfo() {
        return {
            title: this.getTitle(),
            author: this.getAuthor(),
            genre: this.getGenre(),
            isbn: this.getISBN(),
            available: this.isAvailable()
        }
    }

    // Setter method (public accessor) for availablity
    setAvailable(available) { this.#available = available }
}