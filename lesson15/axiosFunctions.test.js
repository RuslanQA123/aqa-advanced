const axios = require('axios');
const { fetchWithError, fetchWithHeadersAndParams, fetchTodos } = require('./axiosFunctions');

jest.mock('axios');

describe('Axios API tests', () => {
  test('fetchWithError should throw an error', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));
    await expect(fetchWithError()).rejects.toThrow('Request failed: Network Error');
  });

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

  test('fetchTodos should return todos', async () => {
    const todos = [{ id: 1, title: 'Test Todo' }];
    axios.get.mockResolvedValueOnce({ data: todos });
    const data = await fetchTodos();
    expect(data).toEqual(todos);
  });
});