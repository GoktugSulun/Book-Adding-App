class Book {
   constructor(bookName, authorName, page){
      this.bookName = bookName;
      this.authorName = authorName;
      this.page = page;
   }

   getBookName(){
      return this.bookName;
   }

   setBookName(bookName){
      this.bookName = bookName;
   }

   getAuthorName(){
      return this.authorName;
   }

   setAuthorName(authorName){
      this.authorName = authorName;
   }

   getPage(){
      return this.page;
   }

   setPage(page){
      this.page = page;
   }

   getInfos(){
      return "Book name: " + this.bookName
               + "\nAuthor name: " + this.authorName
               + "\nPage: " + this.page;
   }
}

export default Book;