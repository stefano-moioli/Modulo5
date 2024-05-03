import { Col, Container, Row } from 'react-bootstrap'
import fantasy from "../../dataBooks/fantasy.json"
import SingleBook from "../singleBook/SingleBook"
import styles from "../allBooks/allTheBooks.css"
import CommentArea from '../commentComponent/CommentArea'
import { useState } from 'react'

const AllTheBooks = ({ searchQuery }) => {
  const [selected, setSelected] = useState(false)


  return (
    <Container className='containerSingleCard'>
      <Row>
    <Col md={8}>
    <Row className="g-2 mt-3">
      {fantasy
        .filter((b) => b.title.toLowerCase().includes(searchQuery))
        .map((book) => {
          return (
            <Col xs={12} md={4} lg={3} key={book.asin}>
              <SingleBook book={book} 
              selected={selected}
              setSelected={setSelected}
              />
            </Col>
          )
        })}
    </Row>
    </Col>
    <Col md={4}>
      <CommentArea asin={selected}/>
    </Col>
    </Row>
    </Container>
  )
}

export default AllTheBooks
