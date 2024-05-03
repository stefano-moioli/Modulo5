import { useState } from 'react';
import MyNav from './components/nuovaNav/MyNav';
import MyFooter from './components/footerComponent/MyFooter';
import AlltheBooks from './components/allBooks/AlltheBooks';
import Fantasy from "../src/dataBooks/fantasy.json";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BookDetails from './components/bookDetails/BookDetails';
import NotFound from "./components/errorPage/NotFound"

function App() {


  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
    <BrowserRouter>
    <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    <Routes>
    <Route path='/' element={<AlltheBooks searchQuery={searchQuery}/>} />
    <Route path="/details/:asin" element={<BookDetails />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    <MyFooter />
    </BrowserRouter>
    </>
  );
}

export default App;
