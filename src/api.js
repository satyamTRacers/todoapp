const API_URL = 'http://localhost:3001';

export const getTasksApi = (callback) => {
    fetch(`${API_URL}/tasks`).then(response => response.json()).then(response => {
        if (response.success == true)
            callback(null, response.tasks);
        else
            callback(null, []);
    }).catch(error => {
        callback(error);
    })
}

export const deleteTaskApi = (id, callback) => {
    fetch(`${API_URL}/deleteTask`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    }).then(response => response.json()).then(response => {
        callback(null, response);
    }).catch(error => {
        callback(error);
    })
}
export const createTaskApi = (text, callback) => {
    fetch(`${API_URL}/addTask`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text
        })
    }).then(response => response.json()).then(response => {
        callback(null, response);
    }).catch(error => {
        callback(error);
    });
}
export const updateTaskStatusApi = (id, callback) => {
    fetch(`${API_URL}/updateTaskStatus`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id
        })
    }).then(response => response.json()).then(response => {
        callback(null, response);
    }).catch(error => {
        callback(error);
    });
}