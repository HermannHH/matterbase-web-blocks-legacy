import React from 'react';

import { Button } from 'react-bootstrap';

export default function UseCase({ heading, text, url, buttonText, handleButtonClick}) {
  return (
    <div className="use-case">
      <h1>{heading}</h1>
      {text}
      <iframe src={url}/>
      <Button variant="primary" size="lg" onClick={() => handleButtonClick()} className="btn-ghost-selago">
        {buttonText}
      </Button>
    </div>
  )
}
