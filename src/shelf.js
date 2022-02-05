function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book)
  }
  return shelfBook
}

function unshelfBook(title, bookShelf) {
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === title) {
      bookShelf.splice(i, 1)
    }
  }
}

function listTitles(titles, fantasyShelf) {
  var fantasyShelf = []
    for (var i = 0; i < titles.length; i++) {
      fantasyShelf.push(titles[i].title)
    }
    return fantasyShelf.join(', ')
}

function searchShelf(bookShelf, title) {
for (var i = 0; i < bookShelf.length; i++) {
  if(bookShelf[i].title === title) {
    return true
  }
}
    return false
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
