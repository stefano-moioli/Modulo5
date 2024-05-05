import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import LoadingComponent from "../loading/LoadingComponent"
import ErrorComponent from "../error/ErrorComponent"
import AddCommentComponent from "../addComment/AddCommentComponent";
import CommentListComponent from "../commentList/CommentListComponent";

export default function CommentArea({asin}){

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const URL = "https://striveschool-api.herokuapp.com/api/comments/";
    const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA4MTdjMWViYzE5NzAwMTk4ZWQxM2MiLCJpYXQiOjE3MTQ2NjUyNjYsImV4cCI6MTcxNTg3NDg2Nn0.OpVVRKpAE80eAwAui1UIxjlAyUPJEL-J93r1SmNaeaI"

    useEffect(() =>{
        const getComments = async () => {
            setIsLoading(true)
            try{
                let response = await fetch(URL + asin,
                {
                    headers: {
                        Authorization: key,
                    },
                }
            )
            console.log(response)
            if (response.ok){
                let comments = await response.json()
                setComments(comments)
                setIsLoading(false)
                setIsError(false)
            } else{
                console.log("error")
                setIsLoading(false)
                setIsError(true)
            }
            } catch (error){
                console.log(error)
                setIsLoading(false)
                setIsError(true)
            }
        }
        if (asin){
            getComments()
        }
    }, [asin])


    return(
        <Container className="mt-3">
            <h4>Comment Area</h4>
        <Col className="mt-2">
        {isLoading && <LoadingComponent />}
        {isError && <ErrorComponent />}
        <AddCommentComponent asin={asin}/>
        <h5 className="mt-5">Reviews</h5>
        <CommentListComponent commentsToShow={comments}/>
        </Col>
        </Container>
    )
}