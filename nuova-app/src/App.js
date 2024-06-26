import { useState } from 'react';
import MyNav from './components/nuovaNav/MyNav';
import MyFooter from './components/footerComponent/MyFooter';
import AlltheBooks from './components/allBooks/AlltheBooks';
import Fantasy from "../src/dataBooks/fantasy.json";

function App() {

  const [books, setBooks] = useState(Fantasy) //nell'array nome stato
  {/* const [booksInit, setBooksInit] = useState(Fantasy)*/}
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>

    <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    {/* <SearchBarComponent allBooks={books} setBooks={setBooks} booksInit={booksInit}/>*/}
    <AlltheBooks searchQuery={searchQuery}/>
    <MyFooter />
    </>
  );
}

export default App;
