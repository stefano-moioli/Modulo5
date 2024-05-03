import { useState } from 'react'
import { Card, Container, Row, Button } from 'react-bootstrap'
import CommentArea from "../commentComponent/CommentArea"
import Styles from "../singleBook/singleBook.css"
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ setSelected, selected, book }) => {

  const navigate = useNavigate()

  return (
    <>
      <Card className='cardContainer' 
        onClick={() => setSelected(book.asin)}
        style={{ border: selected === book.asin ? '2px solid red' : 'none' }}>
        <Card.Img className='cardImg' variant="top" src={book.img} />
        <Card.Body className='cardBody'>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>{book.price}</Card.Text>
          <Card.Text>{book.asin}</Card.Text>
          <Button
            className="w-100 mt-2 bg-dark"
            onClick={() => navigate(`/details/${book.asin}`)}
          >
            See details
          </Button>
        </Card.Body>
      </Card>
      
    </>
  )
}

export default SingleBook
