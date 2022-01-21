class UI {

   countBooks(){
      let bookTable = document.querySelector('.book-table');
      let counterEL = document.querySelector('.counter');

      let size = bookTable.children.length-1;
      if(size == 0){
         counterEL.innerHTML = `There is no book in the list.`;
      }else if(size == 1){
         counterEL.innerHTML = `There is ${size} book in the list.`;
      }else {
         counterEL.innerHTML = `There is ${size} books in the list.`;
      }
   }
   
   adding(book){
      let bookInfos = document.createElement('div');
      bookInfos.classList.add('book-infos');
      bookInfos.classList.add('border');
      bookInfos.innerHTML = `
         <div class="bookName"> ${book.bookName} </div>
         <div class="authorName"> ${book.authorName} </div>
         <div class="page"> ${book.page} </div>
         <div class="delete"> <i class="fas fa-trash-alt deleteParent"></i> </div>
      `;

      let bookTable = document.querySelector('.book-table');
      bookTable.appendChild(bookInfos);

      this.countBooks();
      
   }

   deleting(target){
      let bookTable = document.querySelector('.book-table');
      bookTable.removeChild(target.parentElement.parentElement);
  
      this.countBooks();
   }

   

}

export default UI;