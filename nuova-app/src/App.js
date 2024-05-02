import React, { useState } from 'react';
import MyNav from './components/nuovaNav/MyNav';
import MyFooter from './components/footerComponent/MyFooter';
import WelcomeComponent from './components/welcome/WelcomeComponent';
import AlltheBooks from './components/allBooks/AlltheBooks';
import Fantasy from "../src/dataBooks/fantasy.json"
import SearchBarComponent from './components/searchComponent/SearchBarComponent';


function App() {

  const [books, setBooks] = useState(Fantasy) //nell'array nome stato
  const [booksInit, setBooksInit] = useState(Fantasy)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
    <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <WelcomeComponent />
    <SearchBarComponent allBooks={books} setBooks={setBooks} booksInit={booksInit}/>
    <AlltheBooks allBooks={books}/>

    <MyFooter />
    </>
  );
}

export default App;
