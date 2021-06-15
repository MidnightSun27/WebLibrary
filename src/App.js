import React from 'react';
import MainPage from "./Pages/MainPage";
const Books = JSON.parse(localStorage.getItem('books'));


function App() {
    return (
        <MainPage Books={Books}/>
    );
}
export default App;
