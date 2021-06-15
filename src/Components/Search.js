import React from 'react';
import '../Styles/buttons.scss';

function Search({Books}) {
    const findBook = () => {
        //const cardsGroup = document.getElementById('groupID');
        const input = document.getElementById('Search').value;
        const cards = Books.map(x => document.getElementById(x.id));
        const titles = Books.map(x => {
            return {id: x.id, title: document.getElementById('t' + x.id).innerHTML.toLowerCase()};
        });
        const matched = titles
            .filter(elem => elem.title.includes(input) !== false)
            .map(elem => document.getElementById(elem.id));
        console.log(matched);
        console.log(cards);
        for (let i = 0; i < cards.length; i++) {
            if (matched.indexOf(cards[i]) !== -1)
                cards[i].style.display = "";
            else
                cards[i].style.display = "none";
        }
    };

    return (
        <input className="form-control mr-sm-2"
               type="text"
               id={'Search'}
               onKeyUp={findBook}
               placeholder="Type title here..."/>
    );
}

export default Search;
