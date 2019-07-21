import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

export default function FaqItem({
  index,
  question,
  answer
}) {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {question}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>{answer}</Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}
