import React from "react"
import { Card, Button } from "react-bootstrap"

const Post = ({ title, excerpt, image, readMore }) => {
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{excerpt}</Card.Text>
          <Button variant="primary" href={readMore}>Read More...</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post
