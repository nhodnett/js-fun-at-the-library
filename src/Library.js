function createLibrary (name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
  return library
};

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book)
  } else if (book.genre === 'fiction') {
      library.shelves.fiction.push(book)
    } else if (book.genre === 'nonFiction') {
      library.shelves.nonFiction.push(book)
      }
};

function checkoutBook (library, title, genre) {
        for (var i = 0; i < library.shelves[genre].length; i++) {
          if (library.shelves[genre][i].title === title) {
            library.shelves[genre].splice(i, 1)
              return `You have now checked out ${title} from the ${library.name}`
          }
        }
              return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
};


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
