const API_URL='http://localhost:3001';

export const getTasks=(callback)=>{
console.log('-----inside get tasks function-------');
fetch(`${API_URL}/tasks`).then(response=>{
console.log('response',response);
callback(null,response);
}).catch(error=>{
    callback(error);
})
}