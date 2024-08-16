// Define a few books
var books = [
    { title: "Khmer 001", author: "Kh01", publishedYear: 2020 },
    { title: "Khmer 002", author: "Kh02", publishedYear: 2019 },
    { title: "Khmer 003", author: "Kh03", publishedYear: 2024 }
];
// Define a library
var myLibrary = {
    name: "City Library",
    totalBooks: books.length,
    isOpen: true
};
// Function to format book details with library name
function getBookDetails(book, libraryName) {
    return "".concat(book.title, " by ").concat(book.author, ", published in ").concat(book.publishedYear, ", is available at ").concat(libraryName, ".");
}
// Create an array of book details
var bookDetails = books.map(function (book) { return ({
    Title: book.title,
    Author: book.author,
    Year: book.publishedYear,
    Library: myLibrary.name
}); });
// Display the book details in a table format
console.log(bookDetails);
