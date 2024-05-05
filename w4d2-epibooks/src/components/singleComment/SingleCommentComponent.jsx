import { Button, ListGroup } from 'react-bootstrap';
import Styles from '../singleComment/singleComment.css'

const SingleComment = ({ comment, rate }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4MTdjMWViYzE5NzAwMTk4ZWQxM2MiLCJpYXQiOjE3MTQ2NjUyNjYsImV4cCI6MTcxNTg3NDg2Nn0.OpVVRKpAE80eAwAui1UIxjlAyUPJEL-J93r1SmNaeaI",
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata eliminata!')
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item data-testid='single-comment' className='reviewContainer'>
      <div className='reviewSection'>
        <p>Rating: {comment.rate}</p>
        <p>{comment.comment}</p>
        <Button
        variant="danger"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
      </div>
    </ListGroup.Item>
  )
}

export default SingleComment
