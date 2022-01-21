import Book from './Book.js';
import UI from './UI.js';

const inputs = document.querySelectorAll('input');
const btnAdd = document.querySelector('.btnAdd');

btnAdd.addEventListener('click', addBook);
window.addEventListener('keyup', (e) => e.key == 'Enter' && addBook());

function addBook(){
   // catch input values
   let bookName = inputs[0].value;
   let authorName = inputs[1].value;
   let page = inputs[2].value;

    // validation for inputs
    if(bookName != '' && authorName != ''){
      const book = new Book(bookName, authorName, page);
      const ui = new UI();
      ui.adding(book);
      
      // clear input values
      inputs.forEach(input => input.value = '');
    }
}

// deleting process
const table = document.querySelector('.book-table');
table.addEventListener('click', (e) => {
   const ui = new UI();
   if(e.target.className.includes('deleteParent')){
      ui.deleting(e.target);
   }
});



