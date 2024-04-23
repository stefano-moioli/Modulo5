import { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";


export default function SearchBarComponent(props){
console.log(props); // qui vedo i libri e la funzione che mi consente di scrivere tutti i libri

const [input, setInput] = useState(""); //input legge e setInput scrive

const handleChangeInput = (e) =>{ //evento come parametro scaturisce dall'onChange
    // console.log(input); // funziona
  if(e.target.value === ""){
   props.setBooks(props.booksInit)
    }
    setInput(e.target.value) //qui gli devo dire cosa scrivere nello stato, cioè cosa passare a input
}

const filterBooks = () =>{
    const filterByTerm = props.allBooks.filter(book =>
        book.title.toLowerCase().includes(input.toLowerCase()))
        props.setBooks(filterByTerm)
    }

    

    return(
    <Container>
        <Row>
            <Col>
            <div className="d-flex justify-content-center mt-3">
                <input type="text" onChange={handleChangeInput}/>
                <button onClick={filterBooks}>Search</button>
            </div>
            </Col>
        </Row>
    </Container>
    )
}