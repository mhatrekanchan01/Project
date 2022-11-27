function getTotalBooksCount(books) {
  let count = books.reduce((accumulator, bookElement) => {
     if (bookElement){
       return accumulator + 1;
     }
  }, 0);
  return count;
}

function getTotalAccountsCount(accounts) {
  let accountsCount = accounts.reduce((accumulator, accountsElement) => {
    if (accountsElement) {
      return accumulator += 1;
    }
  }, 0);
  return accountsCount;
}

function getBooksBorrowedCount(books) {
  let booksBorrowedCount = books.reduce((accumulator, booksElement) => {
    let booksBorrowFalsefilter = booksElement.borrows.filter((borrowsElement) =>
      borrowsElement.returned === false);
       return accumulator +  booksBorrowFalsefilter.length;                                              
  }, 0);
  return booksBorrowedCount;
}

function getMostCommonGenres(books) {

let output = {}; /* create blank object*/
let newOutput = {};
let outputArray = []; /* create blank array*/
let newoutputArray = [];

let countGenre = books.filter((booksElement) => { /* loop over each object of books array*/
  if (output[booksElement.genre] === undefined){ /* checks if output object first value is not null*/
    output[booksElement.genre] = 0; /* if null initialize it to 0*/
  } 
  output[booksElement.genre]++; /* add count for genre in output exampple {"science" : 2}*/
});
  
  Object.keys(output).forEach((keyElement) => { /* loops over array of keys in output*/
    let newOutput = {};  /* create new blank object*/
    newOutput["name"] = keyElement; /* add key to genre*/
    newOutput["count"] = output[keyElement]; /* value */
    outputArray.push(newOutput); /* add objects in new array*/
  })
  
  outputArray.sort((outputArrayA, outputArrayB) => outputArrayA.count <= outputArrayB.count ? 0 : -1) /* sort over count*/
  outputArray.length = 5;
return outputArray;
}

function getMostPopularBooks(books) {
 let mostPopular = []; /* blank array*/
    for (let book in books) { /* loop over each book object*/
        let bookName = books[book].title; /* name for each book title*/
        let borrowCount = books[book].borrows.length; /* count for each book borrows with length*/
        mostPopular.push({ /* push object in array*/
            name: bookName,
            count: borrowCount
        })
    }
    return mostPopular.sort((a, b) => b.count - a.count).slice(0, 5)} /* sort and slice to top 5*/


function getMostPopularAuthors(books, authors) {

  /*authorID === books.authorid*/
  /* one author id loop over each book object once use book.borrows.length and add to counter add to blank object 
  loop through each author
  look at matching author id while looping over books
  once found count borrows.length
  sort
  return array with length 5
  */
 
    let blankArray = [];
    books.forEach((book) => {
        authors.forEach((author) => {
            const popAuth = `${author.name.first} ${author.name.last}` /* create const with name*/
            if (book.authorId === author.id) {
                blankArray.push({
                    name: popAuth,
                    count: book.borrows.length
                });
            }
            console.log(blankArray)
        })
    })
  return topFiveSorted(blankArray)
  } 
  function topFiveSorted(array) {
  return array.sort((a, b) => b.count - a.count).slice(0, 5);
  }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
