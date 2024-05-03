import {Container, Card} from "react-bootstrap"
import styles from "./footer.css"

function MyFooter(){
    return (
        <Container fluid className="bg-dark mt-3">
        <Card body className="text-center bg-dark text-white">Copyright &copy;2024</Card>
        </Container>
    )
}

export default MyFooter