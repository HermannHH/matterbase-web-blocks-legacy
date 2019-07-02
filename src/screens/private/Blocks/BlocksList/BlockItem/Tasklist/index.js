import React, { useState, useEffect } from 'react';
import { withApollo } from 'react-apollo';

import {
  dataReduce,
  removeFromKeyedArray,
  removeFromIndexedObject,
  appendToKeyedArray,
  writeToIndexedObject
} from 'utils/dataStructures';

import { CREATE_TASK, DESTROY_TASK } from './mutations';

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
  };

  async function destroyItem({ token }) {
    const { data } = await client.mutate({
      variables: { token },
      mutation: DESTROY_TASK
    });
    console.log('data', data)
    await setTasksKeyedArray(removeFromKeyedArray(tasksKeyedArray, data.taskDelete.task.token));
    await setTasksIndexedObject(removeFromIndexedObject(tasksIndexedObject, data.taskDelete.task.token, data.taskDelete.task));
  };

  let tasksContent;
  if (tasksKeyedArray.length) {
    tasksContent = tasksKeyedArray.map( token => <TaskItem key={token} token={token} data={tasksIndexedObject[token]} destroyItem={destroyItem}/>)
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
