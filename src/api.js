const API_URL = 'http://localhost:3001';

export const getTasksApi = (callback) => {
  fetch(`${API_URL}/tasks`)
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

export const deleteTaskApi = (id, callback) => {
  fetch(`${API_URL}/task`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
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

export const createTaskApi = (task, callback) => {
  fetch(`${API_URL}/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...task})
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

export const updateTaskStatusApi = (id, callback) => {
  fetch(`${API_URL}/updateTaskStatus`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
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