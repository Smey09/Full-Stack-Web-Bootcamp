
// Define the Library structure
interface Library {
    name: string;
    totalBooks: number;
    isOpen: boolean;
}

// Define the Book interface
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

// Define a few books
const books: Book[] = [
    { title: "Khmer 001", author: "Kh01", publishedYear: 2020 },
    { title: "Khmer 002", author: "Kh02", publishedYear: 2019 },
    { title: "Khmer 003", author: "Kh03", publishedYear: 2024 }
];

// Define a library
const myLibrary: Library = {
    name: "City Library",
    totalBooks: books.length,
    isOpen: true
};

// Function to format book details with library name
function getBookDetails(book: Book, libraryName: string): string {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}, is available at ${libraryName}.`;
}

// Create an array of book details
const bookDetails = books.map(book => ({
    Title: book.title,
    Author: book.author,
    Year: book.publishedYear,
    Library: myLibrary.name
}));

// Display the book details in a table format
console.log(bookDetails);
