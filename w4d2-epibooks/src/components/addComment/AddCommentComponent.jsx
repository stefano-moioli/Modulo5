import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  const URL = "https://striveschool-api.herokuapp.com/api/comments/";
  const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4MTdjMWViYzE5NzAwMTk4ZWQxM2MiLCJpYXQiOjE3MTQ2NjUyNjYsImV4cCI6MTcxNTg3NDg2Nn0.OpVVRKpAE80eAwAui1UIxjlAyUPJEL-J93r1SmNaeaI"

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        URL,
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: key
            ,
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata con successo!')
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error('Errore. Riprova')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui la recensione"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" className='bg-dark' type="submit">
          Send
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
