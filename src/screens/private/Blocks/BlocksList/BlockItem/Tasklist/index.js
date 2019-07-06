import React, { useState, useEffect } from 'react';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

import NoResuts from 'components/NoResults';

import { createTask, destroyTask, updateTask } from 'api/matters/blocks/tasks';

import TaskAdd from './TaskAdd';
import TaskItem from './TaskItem';

function Tasklist({ blockToken, data,  matterToken }) {

  const [tasksKeyedArray, setTasksKeyedArray] = useState([]);
  const [tasksIndexedObject, setTasksIndexedObject] = useState({});
  useEffect(() => {
    const reducedData = dataReduce(data, 'token');
    setTasksIndexedObject(reducedData.indexedObject);
    setTasksKeyedArray(reducedData.keyedArray);
  }, []);
  
  async function createItem({ matterToken, blockToken, body }) {
    const data = await createTask({ matterToken, blockToken, body });
    // console.log('data', data)
    await setTasksIndexedObject(writeToIndexedObject(tasksIndexedObject, data.token, data));
    await setTasksKeyedArray(appendToKeyedArray(tasksKeyedArray, data.token));
  };

  async function updateItem({ matterToken, blockToken, token, body, isCompleted }) {
    const data = await updateTask({ matterToken, blockToken, token, body, isCompleted });
    // console.log('data', data)    
    await setTasksIndexedObject(writeToIndexedObject(tasksIndexedObject, data.token, data));
  };

  async function destroyItem({ matterToken, blockToken, token }) {
    const data = await destroyTask({ matterToken, blockToken, token });
    await setTasksKeyedArray(removeFromKeyedArray(tasksKeyedArray, data.token));
    await setTasksIndexedObject(removeFromIndexedObject(tasksIndexedObject, data.token, data));
  };

  let tasksContent;
  if (tasksKeyedArray.length) {
    tasksContent = tasksKeyedArray.map( token => <TaskItem key={token} token={token} matterToken={matterToken} blockToken={blockToken} data={tasksIndexedObject[token]} destroyItem={destroyItem} updateItem={updateItem}/>)
  } else {
    tasksContent = <NoResuts text="No tasks added yet"/>;
  }


  return (
    <div className="tasklist">
      <TaskAdd createItem={createItem} blockToken={blockToken} matterToken={matterToken}/>
      {tasksContent}
    </div>
  )
};

export default Tasklist;
