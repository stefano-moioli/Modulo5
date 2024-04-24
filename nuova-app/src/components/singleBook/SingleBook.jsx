import { Button, Card, Col } from "react-bootstrap";
import CommentArea from "../commentComponent/CommentArea";
import { useState } from "react";

function SingleBook(props) {

   const [selected, setSelected] = useState(false)

    const handleClickImage = () =>{
      setSelected(!selected)
    }

    return (
        <Col xs={12} md={4} lg={3} className="mb-4">
            <Card >
                <Card.Img variant="top" src={props.img} onClick={handleClickImage}
                style={{cursor: "pointer", border: selected ? "2px solid red" : "none"}}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.category}
                    </Card.Text>
                    <Card.Text>
                        {props.price}
                    </Card.Text>
                    <Card.Text>
                        {props.asin}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    
                    <CommentArea />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleBook;