import { Library } from "./modules/Library.mjs"
import { User } from "./modules/Users.mjs"


// create new lib
const myLIB = new Library("IIFE")
const book1 = {title:"Title001",author:"Author001", genre:"TailwindCSS Basic", isbn:"1231", available:true}
const book2 = {title:"Title002",author:"Author002", genre:"Red Hat", isbn:"1232", available:true}
const book3 = {title:"Title003",author:"Author003", genre:"Ubuntu22.04LTS", isbn:"1233", available:true}
const book4 = {title:"Title004",author:"Author004", genre:"Cyber Security", isbn:"1234", available:true}
const book5 = {title:"Title005",author:"Author005", genre:"Python Data Science", isbn:"1235", available:true}
const book6 = {title:"Title006",author:"Author006", genre:"Java Spring Boot", isbn:"1236", available:true}
const book7 = {title:"Title007",author:"Author007", genre:"Laravel MVC", isbn:"1237", available:true}
const book8 = {title:"Title008",author:"Author008", genre:"C# Game Development", isbn:"1238", available:true}
const book9 = {title:"Title009",author:"Author009", genre:"Python Django", isbn:"1239", available:true}
const book10 = {title:"Title0010",author:"Author0010", genre:"Spring Core - Java", isbn:"12310", available:true}
myLIB.addBook(book1)
myLIB.addBook(book2)
myLIB.addBook(book3)
myLIB.addBook(book4)
myLIB.addBook(book5)
myLIB.addBook(book6)
myLIB.addBook(book7)
myLIB.addBook(book8)
myLIB.addBook(book9)
myLIB.addBook(book10)

// create user
const normalUser = new User("User001","normal")
const adminUser = new User("Admin","admins")
// Admin borrowing books
adminUser.borrowBook(book1);
adminUser.borrowBook(book2);
adminUser.borrowBook(book3);
adminUser.borrowBook(book4);
adminUser.borrowBook(book5);
adminUser.borrowBook(book6);
adminUser.viewBorrowedBooks();


// Student borrowing books
normalUser.borrowBook(book1);
normalUser.borrowBook(book2);
normalUser.borrowBook(book3); 
normalUser.borrowBook(book4);
normalUser.borrowBook(book5);
normalUser.borrowBook(book6); 
normalUser.borrowBook(book7); 
normalUser.viewBorrowedBooks();
