import axios from 'axios';

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: 'https://602dd7ee96eaad00176dcd86.mockapi.io/login',
});

export default api;
