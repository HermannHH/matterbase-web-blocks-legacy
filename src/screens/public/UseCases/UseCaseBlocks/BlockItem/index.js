import React from 'react';

import { Button } from 'react-bootstrap';

export default function BlockItem({
  headline,
  handleButtonClick
}) {
  return (
    <div className="block-item">
      <div className="card">
        <div className="card-cover">

        </div>
        <div className="card-body">
          {headline}
        </div>
        
        <div className="card-actions">
          <Button onClick={() => handleButtonClick()}className="btn-ghost-selago btn-block">See use case</Button>
        </div>
      </div>
    </div>
  )
}
