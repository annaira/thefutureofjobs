import React from "react"
import { Card, Button } from "react-bootstrap"

const Post = ({ title, excerpt }) => {
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src="gatsby.jpg" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{excerpt}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post
