//This function uses the ".find()" Array Method
function findAccountById(accounts, id) {
  //this line declares a new variable that finds and stores the account whose "id" matching the one entered into the parameter on line 1
  let foundId = accounts.find((account) => account.id === id);
  //this line returns the found account
  return foundId
}

//This function uses the ".sort()" Array Method
function sortAccountsByLastName(accounts) {
  //This line uses the sort method to compare the "last name" key values in the array in order to arrange them in alphebetical order 
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return accounts
}

//This function uses the ".reduce()" Array Method
function getTotalNumberOfBorrows(account, books) { 
  /*This line uses the ".reduce()" method to accumulate the total number
  of times the matching "acountId" appears in the "borrows" Array*/ 
  return books.reduce((acc, book) => {
    /*This line declares a "const" variable and sets it equal to a ".reduce() function
    that takes in two arguments*/
      const totalBorrows = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0)
    return acc + totalBorrows
  }, 0);

}

//This function uses the ".filter()" Array Method
function getBooksPossessedByAccount(account, books, authors) {
  /*you want to get the most "recent" item meaning the first item
   in the borrow array inside of the books array*/
  return books.filter((book) => {
    /*gives me access to the first item in the array by accessing the "borrows" 
    Array through dot notation and setting the index to 0*/
    const recent = book.borrows[0]
    /*if the recent book's "returned" key value in the borrows array
     is, false and the id in the parameter matches the account id*/
    return !recent.returned && recent.id === account.id
    //you need to map over the books array to find the authorId that = the author.id in the authors array
  }).map((book) => {
    const author = authors.find(author => author.id === book.authorId)
    //afterwards, return the book and author whose ids match
    return {...book, author}
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
