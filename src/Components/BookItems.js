import React, {useState} from 'react';
import "../Styles/BookItems.scss";

function BookItems({Books}) {
    const [allBooks, setAllBooks] = useState(Books);
    const [fav, setFav] = useState([]);

    function favorClick(e, elem) {
        let favArr;
        if (fav.filter(x => x.id === elem.id).length === 0) {
            elem.is_favorite = 1;
            favArr = [...fav, elem];
            setFav(favArr);
        } else {
            elem.is_favorite = 0;
            favArr = fav.filter(x => x.id !== elem.id);
            setFav(favArr);
            if (document.getElementById('showfav').classList.contains('isFav')) {
                document.getElementById(elem.id).style.display = 'none';
            }
        }
        localStorage.removeItem('fav');
        localStorage.setItem('fav', JSON.stringify(favArr));
        localStorage.removeItem('book');
        localStorage.setItem('book', JSON.stringify(allBooks));
        if (!(document.getElementById(e.target.id).classList.contains('active-toggle'))) {
            document.getElementById(e.target.id).classList.add('active-toggle');
        } else {
            document.getElementById(e.target.id).classList.remove('active-toggle');
        }
    }

    const changeRating = (id, newRating) => {
        const newBooks = allBooks.map(function (book) {
            if (book.id === id) {
                book.rating = newRating;
            }
            return book;
        });
        const newFavs = fav.map(function (book) {
            if (book.id === id) {
                book.rating = newRating;
            }
            return book;
        });
        setAllBooks(newBooks);
        setFav(newFavs);
        localStorage.removeItem('books');
        localStorage.setItem('books', JSON.stringify(newBooks));
    };

    return (
        <div className="card-group d-flex justify-content-center" id={'groupID'}>
            {
                Books.map(book => {
                    return (
                        <div className="card" id={book.id}>
                            <img className="card-img-top img" src={book.img} alt="book"/>
                            <div className="card-body">
                                <h5 className="card-title" id={'t'+book.id}>{book.title}</h5>
                                <p className="card-text" id={'a'+book.id}>{book.author}</p>
                                <p className="card-text"><small
                                    className="text-muted publisher year" id={'py'+book.id}>{book.publisher}, {book.year}</small></p>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <input type={'button'} className='like-toggle' id={"1" + book.id} value={'♥'}
                                       onClick={(ev) => favorClick(ev, book)}/>
                                <div className={'rating-container rating'}>
                                    <button
                                        type="button"
                                        className={'rating-button'}
                                        id={'-' + book.id}
                                        disabled={book.rating === 0}
                                        onClick={() => changeRating(book.id, book.rating - 1)}
                                    >
                                        -
                                    </button>
                                    {`Рейтинг: ${book.rating}`}
                                    <button
                                        type="button"
                                        className={'rating-button'}
                                        id={'+' + book.id}
                                        disabled={book.rating === 5}
                                        onClick={() => changeRating(book.id, book.rating + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default BookItems;
