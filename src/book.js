function createTitle(title) {
  return `The ${title}`
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return character
};

function saveReview(review, reviews) {
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i] === review) {
      return
    }
  }
    reviews.push(review)
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
};

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: title.length * 20,
    // calculatePageCount(bookTitle),
    genre: genre,
  }
  return book
};

function editBook(book) {
  book.pageCount = book.pageCount * .75
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
