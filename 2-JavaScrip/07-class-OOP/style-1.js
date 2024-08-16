//exercise1
class Library{
  #books;
  #name;
  constructor(name,books){
    this.#name=name;
    this.#books=books;
   
  }
  get name(){
    return this.#name
  }
  get books(){
    return this.#books
  }
  //exercise2
  addBook(newBook){
    this.#books.push(newBook); 
  }
  removeBook(title,isbn){
    let index=this.#books.findIndex(book=>book.title===title || book.isbn===isbn)
    if(index>-1){
      this.#books.splice(index,1);
    }
  }
  searchBook(title,author,genre){
    return this.#books.filter(book=>(book.title==title||book.author==author)||book.genre==genre)
  }
  displayList(){
    let availableBooks=this.#books.filter((book)=>book.available)
    let forOuput='[\n'
    availableBooks.forEach(book => {
      forOuput=forOuput+book.toString()});
    forOuput+=']'
    console.log(forOuput)
  }
}

class Book{
  #title
  #author
  #genre
  #available
  constructor(title, author, genre,available ){
    this.#title=title;
    this.#author=author;
    this.#genre=genre;
    this.#available=available;
  }
  get title(){
    return this.#title
  }
  get author(){
    return this.#author
  }
  get genre(){
    return this.#genre
  }
  get available(){
    return this.#available
  }
  //exercise3
  borrow(){
    if(this.#available){
      this.#available=false;
    }
    else{
      console.log('sorry this book is already borrowed')
    } 
  }
  return(){
    if(!this.#available)
      this.#available=true;
    else
      console.log('this book is already returned')
  }
  toString() {
    return `{Title: ${this.#title}, Author: ${this.#author}, Genre: ${this.#genre}, Available: ${this.#available}}\n`;
  }

}

class User{
  #name
  #borrowedBooks
  constructor(name, borrowedBooks){
    this.#name=name;
    this.#borrowedBooks=borrowedBooks
  }
  get name(){
    return this.#name
  }
  get borrowedBooks(){
    return this.#borrowedBooks
  }
  
  borrowBook(book){
    if(book){
      if(book&&book.available){
        this.#borrowedBooks.push(book);
        book.borrow()
      }
      else{
        console.log('sorry this book is already borrowed')
      }
    }
    else
      console.log('There is no such book')
  }
  viewBook(){
    let forOuput='[\n'
    this.#borrowedBooks.forEach(book=>forOuput+=book.toString())
    forOuput+=']'
    console.log(forOuput)
  }
}
class Student extends User{
  constructor(name, borrowedBooks){
    super(name, borrowedBooks);
  }
  borrowBook(book){
    if(this.borrowedBooks.length<5){
      super.borrowBook(book)
    }
    else
    console.log('You can borrow only 5 books')
  }
}
class Admin extends User{
  constructor(name, borrowedBooks){
    super(name, borrowedBooks);
  }
  borrowBook(book){
    super.borrowBook(book)
  }

}

//instance
let library=new Library("Library A",[new Book('hary','a','magic',true),
  new Book('hary2','2','magic',false)
]);
library.addBook(new Book('hary3','3','magic',true))
library.removeBook('hary',null);
library.displayList()

let student=new Student('user1',[new Book('hary2','3','magic',true),new Book('hary3','3','magic',true)
  ,new Book('hary3','3','magic',true),
  new Book('hary3','3','magic',true),
])
student.borrowBook(library.searchBook('hary2',null,null)[0])
student.viewBook()
let admin=new Admin('user1',[new Book('hary','3','magic',true)
])
admin.viewBook()