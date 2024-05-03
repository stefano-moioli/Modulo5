import { useState } from 'react';
import MyNav from './components/nuovaNav/MyNav';
import MyFooter from './components/footerComponent/MyFooter';
import AlltheBooks from './components/allBooks/AlltheBooks';
import Fantasy from "../src/dataBooks/fantasy.json";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BookDetails from './components/bookDetails/BookDetails';

function App() {

  const [books, setBooks] = useState(Fantasy) //nell'array nome stato
  {/* const [booksInit, setBooksInit] = useState(Fantasy)*/}
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
    <BrowserRouter>
    <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    {/* <SearchBarComponent allBooks={books} setBooks={setBooks} booksInit={booksInit}/>*/}
    <Routes>
    <Route path='/' element={<AlltheBooks searchQuery={searchQuery}/>} />
    <Route path="/details/:asin" element={<BookDetails />} />
    </Routes>
    <MyFooter />
    </BrowserRouter>
    </>
  );
}

export default App;
