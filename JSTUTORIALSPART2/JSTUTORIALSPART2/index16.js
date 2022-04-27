// Excercise
// Create class library and implement the following
// constructor must take the bookList as an argument
// getBookList();
// issueBook(bookName);
// returnBook(bookName);

class Library{
    constructor(bookList){
        this.bookList=bookList;
        this.issuedBooks={};
    }
    getBookList(){
        console.log(this.bookList);
        this.bookList.forEach(function(e){
            console.log(e);
        });
    }
    issueBook(bookName,user){
        this.issuedBooks[bookName]=user;
    }
    returnBook(bookName){
        delete this.issuedBooks.bookName;
    }
}

l=new Library(["a","b","c"]);
console.log(l);
console.log(l.getBookList());
console.log(l.issueBook("a","Sam"));
console.log(l.returnBook("a"));