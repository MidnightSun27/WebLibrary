import React, {useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";

function SortBy({Books}) {
    const [sort, setSort] = useState({type: null, dir: true});
    const sortTypes = ['title', 'rating', 'year'];
    const [allBooks, setAllBooks] = useState(Books);
    const doSort = (typeOfSort) => {
        const obj = sort.type === typeOfSort ? {type: typeOfSort, dir: false} : {type: typeOfSort, dir: true};
        setSort(obj);
        const sortedBooks = allBooks.sort(
            !obj.dir
                ? (a, b) => (b[obj.type] >= a[obj.type] ? 1 : -1)
                : (a, b) => (b[obj.type] < a[obj.type] ? 1 : -1),
        );
        setAllBooks(sortedBooks);
        localStorage.removeItem('book');
        localStorage.setItem('book', JSON.stringify(allBooks));
        const newItems = allBooks.map(x => {
            return document.getElementById(x.id)
        });
        console.log(newItems);
        const cards = document.querySelectorAll("div.card");
        console.log(cards);
        const cardsGroup = document.getElementById('groupID');
        for (let i = 0; i < cards.length; i++){
           cardsGroup.removeChild(cards[i]);
        }
        for (let i = 0; i < newItems.length; i++) {
            cardsGroup.insertAdjacentElement('beforeend',newItems[i]);
        }
    };
    return (
        <Dropdown id={'SortButton'} className='mx-2'>
            <Dropdown.Toggle style={{
                backgroundColor: "lightblue",
                outline: 'none',
                borderColor: 'transparent',
                boxShadow:'none',
                border: 'none'
            }} id="dropdown-basic">
                Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {sortTypes.map(elem => {
                    return (
                        <Dropdown.Item onClick={() => doSort(elem)} href="#">
                            {elem} {sort.type === elem && (sort.dir ? '↑' : '↓')}
                        </Dropdown.Item>);
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default SortBy;
