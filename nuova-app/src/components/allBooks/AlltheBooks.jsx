import { Container, Row } from "react-bootstrap";
import Fantasy from "../../dataBooks/fantasy.json"
import SingleBook from "../singleBook/SingleBook";
import styles from "../allBooks/allTheBooks.css"

export default function AlltheBooks(props){
    return(
    <Container >
        <Row className="mt-4">
            {props.allBooks.map(book=>( //props.allBooks la passo da App.js per far mappare anche i libri che cerco
                <SingleBook 
                img = {book.img}
                title = {book.title}
                category = {book.category}
                key = {book.asin}
                asin = {book.asin}
                />
            ))}
        </Row>
    </Container>
    )
}
