import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CommentCard({ oneComment }) {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{oneComment.User.name}</Card.Text>
        <Card.Title>{oneComment.user_comment}</Card.Title>
        <Button variant="danger">
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
}
