import axios from 'axios';
import config from './config';
//axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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
    try {
      const result = await axios.get(`${config.apiUrl}/items`);
      return result.data;
    } catch (err) {
      console.error("Error", err);
    }
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`${config.apiUrl}/items`, { name });
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
    await axios.put(`${config.apiUrl}/items/${id}`, updatedTask);
    return { id, isComplete };
  },
  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`${config.apiUrl}/items/${id}`);
    return result.data;
  }
};
