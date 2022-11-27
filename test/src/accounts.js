function findAccountById(accounts, id) {
  let result = accounts.find((element) => element.id === id); /* filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition.*/
  return result;
}


function sortAccountsByLastName(accounts) {
  let result = accounts.sort((a, b) => {
    let aName = a.name.last;
    let bName = b.name.last;
    if (aName < bName) return -1;
  })
  return result;
}

function getTotalNumberOfBorrows(account, books) {  

  let count = books.reduce((accumulator, bookElements) => {
    
    
    let filter = bookElements.borrows.filter((borrowElements) => {
        /* {
        id: "5f446f2e189628dfd4e6225e",
        returned: false,
        */       
      return account.id == borrowElements.id
    })
    return accumulator + filter.length;
    
  }, 0);
  
  return count;
  
  }

function getBooksPossessedByAccount(account, books, authors) {
   let found = [];
  let suthorObj = {};
  authors.forEach(a=>{
    suthorObj[a.id] = a;
  })
  
  
   books.forEach((booksElement) => {
     
     let borrowedBooks = booksElement.borrows;
     
     let accountBorrowedBooks = borrowedBooks.filter((borrowedElement) => {
       if (borrowedElement.id === account.id && borrowedElement.returned === false){
         return true;
       }else{
         return false;
       }
     });
     
     if(accountBorrowedBooks.length>0){
       booksElement["author"] = suthorObj[booksElement.authorId];
     //  booksElement["author"] = authors.find((author)=> booksElement.authorId==author.id);
       booksElement["borrows"] = accountBorrowedBooks;
       found.push(booksElement);
     }
  } );
  
  return found;
}



                                    
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
