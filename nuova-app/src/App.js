import ButtonComponent from './components/button/ButtonComponent';
import React, { useState } from 'react';
import MyNav from './components/nuovaNav/MyNav';
import MyFooter from './components/footerComponent/MyFooter';
import WelcomeComponent from './components/welcome/WelcomeComponent';
import AlltheBooks from './components/allBooks/AlltheBooks';
import Fantasy from "../src/dataBooks/fantasy.json"


function App() {

  const [books, setBooks] = useState(Fantasy) //nell'array nome stato

  return (
    <>
    <MyNav />
    <WelcomeComponent />
    <AlltheBooks />

    <MyFooter />
    </>
  );
}

export default App;
