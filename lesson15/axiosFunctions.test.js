import axios from 'axios';
import { fetchWithError, fetchWithHeadersAndParams, fetchTodos } from '../src/api.js';

jest.mock('axios');

describe('Axios API tests', () => {

  // Task1
  test('fetchWithError should throw an error', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchWithError()).rejects.toThrow('Request failed: Network Error');
  });

  // Task2
  test('fetchWithHeadersAndParams should include headers and params', async () => {
    const mockData = { id: 1, title: 'delectus aut autem' };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const data = await fetchWithHeadersAndParams();
    expect(data).toEqual(mockData);

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos/1',
      expect.objectContaining({
        headers: { 'Custom-Header': 'MyHeaderValue' },
        params: { userId: 1 }
      })
    );
  });

  // Task3
  test('fetchTodos should return todos', async () => {
    const todos = [{ id: 1, title: 'Test Todo' }];
    axios.get.mockResolvedValueOnce({ data: todos });

    const data = await fetchTodos();
    expect(data).toEqual(todos);
  });

});