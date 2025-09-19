const axios = require('axios');

const fetchWithError = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/WRONG_URL');
    return response.data;
  } catch (error) {
    throw new Error('Request failed: ' + error.message);
  }
};

const fetchWithHeadersAndParams = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1', {
      headers: { 'Custom-Header': 'MyHeaderValue' },
      params: { userId: 1 }
    });
    return response.data;
  } catch (error) {
    throw new Error('Request failed: ' + error.message);
  }
};

const fetchTodos = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
};

module.exports = { fetchWithError, fetchWithHeadersAndParams, fetchTodos };