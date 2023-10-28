import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api/product'
});

export const getTasks = async () => {
    const res = await api.get('/');
    return res.data;
};

// export const createTask = async (taskData) => {
//     const res = await api.post('/', taskData);
//     return res.data;
// };

// export const updateTask = async (taskId, updatedData) => {
//     const res = await api.put(`//${taskId}`, updatedData);
//     return res.data;
// };

// export const deleteTask = async (taskId) => {
//     const res = await api.delete(`/${taskId}`);
//     return res.data;
// };