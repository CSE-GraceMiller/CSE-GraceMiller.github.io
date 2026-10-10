//json file location link
const base_url = "https://cse-gracemiller.github.io/json/";

const getBooks = async () => {
  const url = `${base_url}books.json`;
  const response = await fetch(url);
  return response.json();
};

const showBooks = async () => {
  const books = await getBooks();

  books.forEach((book) => {
    document.getElementById("books-container").append(displayBook(book));
  });
};

const displayBook = (book) => {
  const article = document.createElement("article");
  article.classList.add("book-card-catalogue");

  const coverDiv = document.createElement("div");
  coverDiv.classList.add("book-cover");

  //book img sect
  const img = document.createElement("img");
  img.src = "https://cse-gracemiller.github.io/csce242/projects/part6-parsing-contact/images/" + book.img_name;

  coverDiv.append(img);
  article.append(coverDiv);

  //book info sect
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("book-info");

  const h3 = document.createElement("h3");
  h3.innerHTML = book.title;
  infoDiv.append(h3);

  const author = document.createElement("p");
  author.classList.add("author");
  author.innerHTML = `By ${book.author}`;
  infoDiv.append(author);

  const desc = document.createElement("p");
  desc.classList.add("book-desc");
  desc.innerHTML = book.description;
  infoDiv.append(desc);

  const genre = document.createElement("span");
  genre.classList.add("genre-tag");
  genre.innerHTML = book.genre;
  infoDiv.append(genre);

  const available = document.createElement("div");
  available.classList.add("available");
  available.innerHTML = book.available ? "✓ Available" : "✗ Checked Out";
  infoDiv.append(available);

  article.append(infoDiv);

  return article;
};

showBooks();


