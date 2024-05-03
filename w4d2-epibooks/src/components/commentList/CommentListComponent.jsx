import { ListGroup } from 'react-bootstrap'
import SingleComment from "../singleComment/SingleCommentComponent"

const CommentListComponent = ({ commentsToShow }) => (
  <ListGroup style={{ color: 'black' }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
)

export default CommentListComponent
