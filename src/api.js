const ENDPOINT_URL = process.env.ENDPOINT_URL||'http://localhost:3001';
const headers={'Content-Type':'application/json'};

const getTasksApi = (callback) => {
  fetch(`${ENDPOINT_URL}/tasks`)
  .then(response => {
    if(!response.ok) throw Error(response.statusText);
    return response;
  })
  .then(response => response.json())
  .then(response => {
    callback(null,response.tasks);
  })
  .catch(error => {
    callback(error);
  })
}

const deleteTaskApi = (id, callback) => {
  fetch(`${ENDPOINT_URL}/task`, {
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers
  })
  .then(response => {
    if(!response.ok) throw Error(response.statusText);
    return response;
  })
  .then(response => response.json())
  .then(response => {
    callback(null, response);
  })
  .catch(error => {
    callback(error);
  })
}

const createTaskApi = (task, callback) => {
  fetch(`${ENDPOINT_URL}/task`, {
    method: 'POST',
    body: JSON.stringify({...task}),
    headers
  })
  .then(response => {
    if(!response.ok) throw Error(response.statusText);
    return response;
  })
  .then(response => response.json())
  .then(response => {
    callback(null, response);
  })
  .catch(error => {
    callback(error);
  });
}

const updateTaskStatusApi = (id, callback) => {
  fetch(`${ENDPOINT_URL}/updateTaskStatus`, {
    method: 'PUT',
    body: JSON.stringify({id}),
    headers
    })
  .then(response => {
    if(!response.ok) throw Error(response.statusText);
    return response;
  })
  .then(response => response.json())
  .then(response => {
    callback(null,response);
  })
  .catch(error => {
    callback(error);
  });
}

module.exports={
  getTasksApi,
  createTaskApi,
  updateTaskStatusApi,
  deleteTaskApi
};