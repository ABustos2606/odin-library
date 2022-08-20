let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead

  }

  Book.prototype.info = function() {
    return this.title+' by '+this.author+', '+this.pages+' pages, '+this.hasRead
  }

  function addBookToLibrary() {
    // do stuff here
  }

  const book1 = new Book('La noche venerable', 'Lucas Ayala', 78, 'not read yet')

  console.log(book1.info())