import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log('Starting Request:', request.method.toUpperCase(), request.url);
    return request;
});

axios.interceptors.response.use(response => {
    console.log('Response received:', response.status, response.config.url);
    return response;
});

function checkResponse(response, expectedStatus = 200) {
    if (response.status !== expectedStatus) {
        console.error(`Status mismatch: expected ${expectedStatus}, got ${response.status}`);
    } else {
        console.log(`Status OK: ${response.status}`);
    }

    if (!response.data) {
        console.error('No data in response');
    } else {
        console.log('Data exists in response');
    }
}

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
        console.log('GET /todos/1');
        checkResponse(res);
        console.log(res.data);
    });

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => {
        console.log('GET /users/1');
        checkResponse(res);
        console.log(res.data);
    });

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log('GET /posts');
        checkResponse(res);
        console.log(`Received ${res.data.length} posts`);
    });

axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Test Post',
    body: 'This is a test',
    userId: 1
})
.then(res => {
    console.log('POST /posts');
    checkResponse(res, 201);
    console.log(res.data);
});

axios.post('https://jsonplaceholder.typicode.com/comments', {
    name: 'Test Comment',
    email: 'test@example.com',
    body: 'Hello world!',
    postId: 1
})
.then(res => {
    console.log('POST /comments');
    checkResponse(res, 201);
    console.log(res.data);
});