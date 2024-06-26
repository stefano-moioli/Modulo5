import { useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import CommentArea from "../commentComponent/CommentArea"
import Styles from "../singleBook/singleBook.css"

const SingleBook = ({ setSelected, selected, book }) => {

  return (
    <>
      <Card className='cardContainer' 
        onClick={() => setSelected(book.asin)}
        style={{ border: selected === book.asin ? '2px solid red' : 'none' }}>
        <Card.Img className='cardImg' variant="top" src={book.img} />
        <Card.Body className='cardBody'>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>{book.price}</Card.Text>
          <Card.Text>{book.asin}</Card.Text>
        </Card.Body>
      </Card>
      
    </>
  )
}

export default SingleBook
