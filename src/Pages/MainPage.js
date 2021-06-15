import React, {Fragment} from 'react';
import BookItems from "../Components/BookItems";
import logo from "../Static/logo.svg";
import Search from "../Components/Search";
import SortBy from "../Components/SortBy";
import FilterBy from "../Components/FilterBy";
import {filters} from "../Static/Books";
import "../Styles/MainPage.scss";

function MainPage({Books}) {
    const ShowAll = (Books) => {
        document.getElementById('showfav').classList.remove('isFav');
        Books.forEach(book => {
            document.getElementById(book.id).style.display = 'block';
        });
        document.getElementsByClassName('h1')[0].innerHTML = '~Bibliotheca~';
    };

    const ShowFav = (Books) => {
        document.getElementById('showfav').classList.add('isFav');
        Books.forEach(book => {
            if (book.is_favorite === 0) {
                document.getElementById(book.id).style.display = 'none';
            }
        });
        document.getElementsByClassName('h1')[0].innerHTML = '~Favorite~';
    };
    return (
        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor: '#e3f2fd'}}>
                <img src={logo} alt={'logo'} className='mx-1'/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <button type="button" id={'showAll'} className="btn btn-link"
                            onClick={() => ShowAll(Books)}>Main
                    </button>
                    <button type="button" id={'showfav'} className="btn btn-link"
                            onClick={() => ShowFav(Books)}>Favorite
                    </button>
                    <Search Books={Books}/>
                    <SortBy Books={Books}/>
                    <FilterBy filters={filters}/>
                </div>
            </nav>
            <h1 className='h1 my-2 mx-auto' style={{width: "300px"}}>~Bibliotheca~</h1>
            <BookItems Books={Books}/>
        </Fragment>
    );
}

export default MainPage;
