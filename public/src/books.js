function findAuthorById(authors, id) {
  return authors.find((element) => element.id === id); 
}

function findBookById(books, id) {
  return books.find((element) => element.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let output = [];

  let output1 = books.filter((booksElement) => {    
  let borrowsArray = booksElement.borrows;
   if (borrowsArray[0].returned === false){
    return true;
  }});

  
  let output2 = books.filter((booksElement, index) => {    
  let borrowsArray = booksElement.borrows;
    if (borrowsArray[0].returned === true){     
    return true;
  }});
  return [output1, output2];
}

function getBorrowersForBook(book, accounts) {
  let output = []; /* blank array to store result an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array. */
  let bookFilter = book.borrows.filter((bookBorrowsElement) => {   /* each object in borrows array */
  let arrayAccounts = accounts.forEach((accountsElement) => {/* each object in accounts array */
    if (accountsElement.id === bookBorrowsElement.id ){
      accountsElement["returned"] =  bookBorrowsElement.returned; /* add boolean value to returned property in account object */
      output.push(accountsElement); /*add modified object to output array */
    }
      
  })
  })
 
output.length = 10; /* reduce array size */
  return output;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
