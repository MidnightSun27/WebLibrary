import data from "./Books.json";

export const books = Array.from(data);

localStorage.setItem('books', JSON.stringify(books));
localStorage.setItem('fav', JSON.stringify([]))


const year = Array.from(new Set(books.map(x => x.year)));
const author = Array.from(new Set(books.map(x => x.author)));
const publisher = Array.from(new Set(books.map(x => x.publisher)));
export const filters = {
    year: year,
    author: author,
    publisher: publisher
};

