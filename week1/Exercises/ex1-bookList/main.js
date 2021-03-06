function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const headTitle = document.createElement("h1");
  headTitle.textContent = "The Book List";
  headTitle.style.fontSize = "50px";
  headTitle.style.fontFamily = "cursive";
  headTitle.style.paddingLeft = "70px";
  document.body.appendChild(headTitle)

  const list = document.createElement("ul");
  list.style.display = "flex";
  list.style.flexWrap = "wrap";
  document.body.appendChild(list); 


  for (let i = 0; i < myBooks.length; i++) {

    const bookList = document.createElement("li");
    bookList.style.listStyle = "none";
    bookList.style.padding = "25px";
    bookList.style.margin = "25px";
    bookList.style.width = "400px";
    bookList.style.borderRadius = "25px"
    list.appendChild(bookList);

    const bookTitle = document.createElement("p");
    bookTitle.textContent = `${myBooks[i].title} - ${myBooks[i].author}`;
    bookTitle.style.fontFamily = "cursive";
    bookList.appendChild(bookTitle);

    const bookImage = document.createElement("img");
    bookImage[i] = new Image();
    bookImage[i].src = 'bookImage' + i + '.jfif';
    bookImage[i].style.paddingTop = "20px";
    bookList.appendChild(bookImage[i]);


    if (myBooks[i].alreadyRead == true) {
      bookList.style.backgroundColor = "green";
    } else {
      bookList.style.backgroundColor = "red";
    }
  }
};

main();