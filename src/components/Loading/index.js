import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export default function Loading({ text, fullScreen }) {
  return (
    <div className={fullScreen ? "loading full" : "loading"}>
      <FontAwesomeIcon icon={faCircleNotch} size="lg" spin />
      <h5>{ text || "Loading..."}</h5>
    </div>
  )
}
