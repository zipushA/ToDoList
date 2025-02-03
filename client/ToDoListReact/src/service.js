import axios from 'axios';
axios.defaults.baseURL = "https://todolistserver-xit0.onrender.com";

// הוספת interceptor לשגיאות
axios.interceptors.response.use(
  response => response, // אם הבקשה הצליחה, מחזירים את התגובה
  error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error); // דחיית ההבטחה עם השגיאה
  }
);

//const apiUrl = "http://localhost:5023"

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/items`, { name });
    return result.data;
  },

  // setCompleted: async(id, isComplete)=>{
  //   console.log('setCompleted', { id, isComplete });
  //   const updatedTask = { isComplete };
  //   await axios.put(`/items/${id}`, updatedTask);
  //   return { id, isComplete };
  // },
  setCompleted: async (id, name, isComplete) => {
    console.log('setCompleted', { id, name, isComplete });
    const updatedTask = { name, isComplete };
    await axios.put(`/items/${id}`, updatedTask);
    return { id, isComplete };
  },
  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`/items/${id}`);
    return result.data;
  }
};
