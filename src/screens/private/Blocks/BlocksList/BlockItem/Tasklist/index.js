import React, { useState, useEffect } from 'react';
import { withApollo } from 'react-apollo';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

import { CREATE_TASK } from './mutations';

import TaskAdd from './TaskAdd';
import TaskItem from './TaskItem';

function Tasklist({ client, blockToken, data }) {

  const [tasksKeyedArray, setTasksKeyedArray] = useState([]);
  const [tasksIndexedObject, setTasksIndexedObject] = useState({});
  useEffect(() => {
    const reducedData = dataReduce(data, 'token');
    setTasksIndexedObject(reducedData.indexedObject);
    setTasksKeyedArray(reducedData.keyedArray);
  }, []);
  // console.log('tasklist data', token, tasksKeyedArray, tasksIndexedObject);

  async function createItem({ blockToken, body }) {
    const { data } = await client.mutate({
      variables: { blockToken, body },
      mutation: CREATE_TASK
    });
    console.log('data', data)
    await setTasksIndexedObject(writeToIndexedObject(tasksIndexedObject, data.taskCreate.task.token, data.taskCreate.task));
    await setTasksKeyedArray(appendToKeyedArray(tasksKeyedArray, data.taskCreate.task.token));
    // await setBlocksIndexedObject(writeToIndexedObject(blocksIndexedObject, data.blockCreate.block.token, data.blockCreate.block));
    // await setBlocksKeyedArray(appendToKeyedArray(blocksKeyedArray, data.blockCreate.block.token));
  };

  let tasksContent;
  if (tasksKeyedArray.length) {
    tasksContent = tasksKeyedArray.map( token => <TaskItem key={token} token={token} data={tasksIndexedObject[token]} />)
  } else {
    tasksContent = <h3>No tasks</h3>;
  }


  return (
    <div>
      <TaskAdd createItem={createItem} blockToken={blockToken}/>
      {tasksContent}
    </div>
  )
};

export default withApollo(Tasklist);
