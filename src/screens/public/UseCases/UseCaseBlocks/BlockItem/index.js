import React from 'react';

import { Button } from 'react-bootstrap';

export default function BlockItem({
  headline,
  handleButtonClick,
  coverImgUrl
}) {
  return (
    <div className="block-item">
      <div className="card">
        <div className="card-cover" style={{backgroundImage: `url(${coverImgUrl})`}}>

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
