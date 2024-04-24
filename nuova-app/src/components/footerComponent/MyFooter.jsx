import Container from "react-bootstrap/esm/Container"
import styles from "./footer.css"

function MyFooter(){
    return (
        <Container id="footerContainer">
            <div className="row ps-3 mt-3">
                <div className="col-4">
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                </div>
                <div className="col-4">
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                </div>
                <div className="col-4">
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                    <p>about</p>
                </div>
            </div>
        </Container>
    )
}

export default MyFooter