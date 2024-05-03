import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from '../commentComponent/CommentArea'
import fantasy from '../../dataBooks/fantasy.json'
import Styles from "../bookDetails/bookDetails.css"

const BookDetails = () => {
  const params = useParams()
  const foundBook = fantasy.find((book) => book.asin === params.asin)

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <Card className='bookDetailContainer'>
          <Card.Img className='bookDetailImg' src={foundBook.img} />
          <Card.Body>
            <Card.Title>
              {foundBook.title}
            </Card.Title>
            <Card.Text>{foundBook.category}</Card.Text>
          <Card.Text>{foundBook.price}</Card.Text>
          <Card.Text>{foundBook.asin}</Card.Text>
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails
