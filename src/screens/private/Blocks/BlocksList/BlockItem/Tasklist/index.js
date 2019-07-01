import React, { useState, useEffect } from 'react';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

import TaskAdd from './TaskAdd';
import TaskItem from './TaskItem';

export default function Tasklist({ token, data }) {

  const [tasksKeyedArray, setTasksKeyedArray] = useState([]);
  const [tasksIndexedObject, setTasksIndexedObject] = useState({});
  useEffect(() => {
    const reducedData = dataReduce(data, 'token');
    setTasksIndexedObject(reducedData.indexedObject);
    setTasksKeyedArray(reducedData.keyedArray);
  }, []);
  console.log('tasklist data', token, tasksKeyedArray, tasksIndexedObject);

  let tasksContent;
  if (tasksKeyedArray.length) {
    tasksContent = tasksKeyedArray.map( token => <TaskItem key={token} token={token} data={tasksIndexedObject[token]}/>)
  } else {
    tasksContent = <h3>No tasks</h3>;
  }


  return (
    <div>
      <TaskAdd />
      {tasksContent}
    </div>
  )
}
