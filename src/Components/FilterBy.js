import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function FilterBy({filters}) {
    const Books = JSON.parse(localStorage.getItem('books'));
    const filterBy = (e) => {
        const filter = e.target.innerHTML;
        const cards = Books.map(x => {
            return {
                id: x.id,
                author: document.getElementById('a' + x.id).innerHTML,
                publisher: document.getElementById('py' + x.id).innerHTML
                    .replace(`, ${x.year}`, ''),
                year: document.getElementById('py' + x.id).innerHTML
                    .replace(`${x.publisher}, `, '')
            };
        });
        console.log(cards)
        cards.forEach(card => {
            if(card.author === filter || card.publisher === filter || card.year === filter){
                document.getElementById(card.id).style.display = "";
            }
            else {
                document.getElementById(card.id).style.display = "none"
            }
            if(filter === "Show all"){
                document.getElementById(card.id).style.display = "";
            }
        })
    };
    return (
        <Dropdown id={'FilterButton'}>
            <Dropdown.Toggle style={{
                backgroundColor: "lightblue",
                outline: 'none',
                borderColor: 'transparent',
                boxShadow: 'none',
                border: 'none'
            }} id="dropdown-basic">
                Filter by
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={filterBy}>
                <Dropdown.Item className='option' href="#/action-1">Show all</Dropdown.Item>
                <Dropdown.Item className='option' href="#/action-1" disabled>Author</Dropdown.Item>
                {
                    filters.author.map(a => {
                        return (
                            <Dropdown.Item className='option' href="#">{a}</Dropdown.Item>
                        );
                    })
                }
                <Dropdown.Item className='option' href="#/action-4" disabled>Year</Dropdown.Item>
                {
                    filters.year.map(a => {
                        return (
                            <Dropdown.Item className='option' href="#">{a}</Dropdown.Item>
                        );
                    })
                }
                <Dropdown.Item className='option' href="#/action-5" disabled>Publusher</Dropdown.Item>
                {
                    filters.publisher.map(a => {
                        return (
                            <Dropdown.Item className='option' href="#">{a}</Dropdown.Item>
                        );
                    })
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterBy;
