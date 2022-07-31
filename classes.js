class Book{
    constructor(title,author){
        this.title = title;
        this.author = author;
    }
    get _title(){
        return this.title;
    }
    set _title(value){
        this.title = value;
    }
    get _author(){
        return this.author;
    }
    set _author(value){
        this.author = value;
    }
    toString(){
        return ${this.title} is ${this.author}'s book;
    }
    isTheSameBook(book){
        return (this.author === book._author && this.title === book._title);
    }
}

class LibraryBookBase extends Book{
    constructor(title,author,bookId) {
        super(title,author);
        this.bookId = bookId;
    }
    get _bookId(){
        return this.bookId;
    }
    set _bookId(value){
        this.bookId = value;
    }
    toString() {
        return ${this.author}'s ${this.title}  id is ${this.bookId};
    }
}

class LibraryBook extends LibraryBookBase{
    constructor(title,author,bookId,quantity) {
        super(title,author,bookId);
        this.quantity = quantity;
    }
    get _quantity(){
        return this.quantity;
    }
    set _quantity(value){
        this.quantity = value;
    }
    toString() {
        return Author is ${this.author}, title is ${this.title},id is ${this.bookId},quantity is ${this.quantity};
    }
    increaseQuantityBy(amount){
        this.quantity += amount;
        return this.quantity;
    }
    decreaseQuantityBy(amount){
        this.quantity -= amount;
        return this.quantity;
    }
}

class ReaderBook extends LibraryBookBase{
    constructor(title,author,bookId,expirationDate,isReturned) {
        super(title,author,bookId);
    }
    get _expirationDate(){
        return this.expirationDate;
    }
    set _expirationDate(value){
        this.expirationDate = value;
    }
    get _isReturned(){
        return this.isReturned;
    }
    set _isReturned(value){
        this.isReturned = value;
    }
    toString() {
        return Author is ${this.author}, title is ${this.title},id is ${this.bookId},expiration date is ${this.expirationDate};
    }
}

class Reader{
    constructor(firstName ,lastName, readerId,books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.readerId = readerId;
        this.books = books;
    }
    get _firstName(){
        return this.firstName;
    }
    set _firstName(value){
        this.firstName = value;
    }
    get _lastName(){
        return this.lastName;
    }
    set _lastName(value){
        this.lastName = value;
    }
    get _readerId(){
        return this.readerId;
    }
    set _readerId(value){
        this.readerId = value;
    }
    get _books(){
        return this.books;
    }
    set _books(value){
        this.books = value;
    }
    toString(){
        return Reader's firstname is ${this.firstName}, lastname is ${this.lastName}, id is ${this.readerId};
    }
    borrowBook(book,library) {
        if(library.includes(book) && book !== null && book instanceof ReaderBook) {
            this.books.push(book);
        }
    }

}

class Library{
    constructor(books, readers) {
        this.books = books;
        this.readers = readers;
    }

    get _books(){
        return this.books;
    }
    set _books(value){
        this.books = value;
    }
    get _readers(){
        return this.readers;
    }
    set _readers(value){
        this.readers = value;
    }
    doHaveBook(requestedBook){
        return this.books.includes(requestedBook);
    }
    addBook(newBook){
        if (this.books.includes(newBook)){
            this.books.at(this.books.indexOf(newBook)).quantity++;
        }this.books.push(newBook);
    }
    addBooks(newBooks){
        for (let i = 0;i < newBooks.length;i++){
            if (this.books.includes(newBooks[i])){
                this.books.at(this.books.indexOf(newBooks[i])).quantity++;
            }this.books.push(newBooks[i]);
        }
        return this.books;
    }
    checkReaderId(readerId){
        for (let i = 0;i < this.readers.length;i++) {
            if (this.readers[i] === readerId) return true;
        }return false;
    }
    lendBook(book,readerId){
        return book !== undefined && this.books.includes(book) && this.readers.find(reader => reader.readerId === readerId)

    }
}