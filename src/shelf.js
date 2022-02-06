function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book)
  }
};

function unshelfBook(title, bookShelf) {
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === title) {
      bookShelf.splice(i, 1)
    }
  }
};

function listTitles(titles) {
  var titlesFromFantasyShelf = []
    for (var i = 0; i < titles.length; i++) {
      titlesFromFantasyShelf.push(titles[i].title)
    }
    return titlesFromFantasyShelf.join(', ')
};

function searchShelf(bookShelf, title) {
for (var i = 0; i < bookShelf.length; i++) {
  if(bookShelf[i].title === title) {
    return true
  }
}
    return false
};


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
