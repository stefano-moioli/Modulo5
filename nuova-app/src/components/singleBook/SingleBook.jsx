import { Button, Card, Col } from "react-bootstrap";

function SingleBook(props) {
    return (
        <Col xs={12} md={3} lg={4} className="mb-4">
            <Card >
                <Card.Img variant="top" src={props.img} />
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
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleBook;